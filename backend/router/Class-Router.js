const express = require('express');
const { GetClass, GetClasss, UpdateClass, DeleteClass,AddClass } = require('../controller/Class-Controller');
const router = express.Router();
router.get('/', GetClass).get('/:id', GetClasss).post('/signup', AddClass).put('/:id', UpdateClass).delete('/:id', DeleteClass)
module.exports = router;