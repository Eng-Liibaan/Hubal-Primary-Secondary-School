const express = require('express');
const { GetReceipt, GetReceipts, UpdateReceipt, DeleteReceipt,AddReceipt } = require('../controller/Receipt-Controller');
const router = express.Router();
router.get('/', GetReceipt).get('/:id', GetReceipts).post('/signup', AddReceipt).put('/:id', UpdateReceipt).delete('/:id', DeleteReceipt)
module.exports = router;