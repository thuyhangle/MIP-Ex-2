var express = require('express');
var router = express.Router();
var data = require('../src/data');

function getAllStudents(req,res,next)
{
  res.json(data.getAllStudents());
}

router.route('/students')
  .get(getAllStudents)
  .post(postNewStudent);

function postNewStudent(req,res,next)
{
  var newStudent = data.addStudent(req.body);
  res.send({student: newStudent});
}

module.exports = router
