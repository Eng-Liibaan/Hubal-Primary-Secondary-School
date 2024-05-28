const express = require('express');
const { GetStudent, GetStudents, UpdateStudent, DeleteStudent,AddStudent } = require('../controller/Student-Controller');
const router = express.Router();
router.get('/', GetStudent).get('/:id', GetStudents).post('/signup', AddStudent).put('/:id', UpdateStudent).delete('/:id', DeleteStudent)
module.exports = router;