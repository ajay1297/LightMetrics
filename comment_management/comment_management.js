'use strict'

const comment_model = require('../database/models/comment_model');
const sequelize = require('./../database/dbInit');
const queries = require('../database/sqlQueries');

class CommentManagement {
    /**
     * Create Comment Function
     * @param {*} req 
     * @param {*} res 
     */
    async createComment(req, res) {
        try {
            console.log(req.body);
            let {comment, userid, commentid} = req.body;
            if(comment == null || userid == null) {
                res.status(200).send(`Please send required params`);
            }
            let commentV = null;
            if(commentid == null) {
                commentV = new comment_model({comment, commentparentid: userid, userid});
            }
            else {
                commentV = new comment_model({comment, commentparentid: commentid, userid});
            }
            let commentObj = await commentV.save();
            return res.status(200).send(`Comment saved with ID : ${commentObj.commentid}`);
        }
        catch(error) {
            console.error("Error while creating comment ", JSON.stringify(error));
            return res.status(500).send('Server Error');
        }
    }
    async updateComment(req, res) {
        try {
            console.log(req.body);
            console.log(req.params);
            let {comment} = req.body;
            let {commentid} = req.params;
            if(comment == null || commentid == null) {
                res.status(200).send(`Please send required params`);
            }
            let commentV = await comment_model.findOne({
                where: {
                    commentid
                }
            });
            if(!commentV) {
                return res.status(200).send(`No Comment Found with ID : ${commentid}`);
            }
            let commentObj = await commentV.update({comment});
            return res.status(200).send(`Comment update with ID : ${commentObj.commentid}`);
        }
        catch(error) {
            console.error("Error while updating comment ", JSON.stringify(error));
            return res.status(500).send('Server Error');
        }
    }
    async deleteComment(req, res) {
        try {
            console.log(req.body);
            let {commentid} = req.body;
            if(commentid == null) {
                res.status(200).send(`Please send required params`);
            }
            let commentV = await comment_model.destroy({
                where: {
                    commentid
                }
            });
            return res.status(200).send(`Comments Deleted : ${commentV}`);
        }
        catch(error) {
            console.error("Error while deleting comment ", JSON.stringify(error));
            return res.status(500).send('Server Error');
        }
    }
    async getComments(req, res) {
        try {
            console.log(req.body);
            let { userid } = req.body;
            if(userid == null) {
                res.status(200).send(`Please send required params`);
            }
            let commentListObj = await comment_model.findAll({
                where: {
                    userid
                }
            });
            return res.status(200).send(commentListObj);
        }
        catch(error) {
            console.error("Error while fetching comments ", JSON.stringify(error));
            return res.status(500).send('Server Error');
        }
    }
    async getComment(req, res) {
        try {
            console.log(req.body);
            let { userid, commentid } = req.body;
            if(userid == null || commentid == null) {
                res.status(200).send(`Please send required params`);
            }
            let commentListObj = await comment_model.findAll({
                where: {
                    userid,
                    commentid
                }
            });
            return res.status(200).send(commentListObj);
        }
        catch(error) {
            console.error("Error while fetching comments ", JSON.stringify(error));
            return res.status(500).send('Server Error');
        }
    }
    async nestedComments(req, res) {
        try {
            const commentV = [req.body.commentid]
            if(req.body.commentid == null) {
                res.status(200).send(`Please send required params`);
            }
            const list = await sequelize.query(queries.nestedComments, {replacements: commentV});
            console.log(list);
            let querydata = list[0];
            let commentQ = [req.body.commentid];
            let finalList =  {}
            while(commentQ.length != 0) {
                let peekElement = commentQ[0];
                commentQ.shift();
                let children = getData(peekElement, req.body.commentid, querydata);
                if(children.length != 0) finalList[peekElement] = children;
                for(let child of children) {
                    commentQ.push(child.commentid);
                }
            }
            return res.status(200).send(finalList);
        }
        catch(error) {
            console.error("Error while fetching comments ", JSON.stringify(error));
            return res.status(500).send('Server Error');
        }
    }
}

function getData(commentid, reqId, querydata) {
    console.log("Started getData");
    let children = [];
    for(let child of querydata) {
        if(commentid == child.commentparentid && child.commentid != reqId) {
            children.push(child);
        }
    }
    return children;
}

module.exports = new CommentManagement();