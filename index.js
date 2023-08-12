'use strict'

const express = require('express');
const config = require('config');
const connectToDB = require('./database/dbConnect');
const syncToDB = require('./database/dbSync');
const UserManagement = require('./user_management/user_management_routes');
const CommentManagement = require('./comment_management/comment_management_routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1/user',  UserManagement);
app.use('/api/v1/comment', CommentManagement);

app.get('*', (req, res) => {
    res.send('Invalid Route');
});

const PORT = process.env.PORT || config.get('port');

app.listen(PORT, () => {
    console.log('App is Up & listening on ', PORT);
})
