'use strict'

const express = require('express');
const router = express.Router();
const UserManagement = require('./user_management');

router.post('/create', UserManagement.createUser);
module.exports = router;