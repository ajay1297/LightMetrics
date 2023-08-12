'use strict'

const queries = {
    nestedComments : `
    WITH RECURSIVE CommentReplyTable AS 
    (
        SELECT C.commentid, C.comment, C.commentparentid, C.userid from comment C where commentparentid = ?
        UNION
        SELECT C.commentid, C.comment, C.commentparentid, C.userid from CommentReplyTable CRT JOIN comment C on CRT.commentid = C.commentparentid
    )
    Select CRT.commentid, CRT.comment, CRT.commentparentid, CRT.userid, U.name from CommentReplyTable CRT JOIN user U on CRT.userid = U.userid;`
}

module.exports = queries;