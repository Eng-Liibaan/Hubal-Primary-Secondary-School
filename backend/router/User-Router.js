const express = require('express');
const { GetUser, GetUsers, UpdateUser, DeleteUser } = require('../controller/User-Controller');
const VerifyToken = require('../middleware/Verify-Token');
const { Upload } = require('../config/Database');
const router = express.Router();
router.get('/', VerifyToken, GetUser).get('/all',VerifyToken, GetUsers).put('/:id',Upload, UpdateUser).delete('/:id', DeleteUser)
module.exports = router;