'use strict'

const express = require('express');
const router = express.Router();
const CommentManagement = require('./comment_management');

router.post("/create", CommentManagement.createComment);
router.put("/update/:commentid", CommentManagement.updateComment);
router.delete("/delete/:commentid", CommentManagement.deleteComment);
router.get("", CommentManagement.getComment);
router.get("/allcomments", CommentManagement.getComments);
router.get("/nestedComments", CommentManagement.nestedComments);

module.exports = router;