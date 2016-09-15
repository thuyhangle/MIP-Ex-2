var express = require('express');
var router = express.Router();
var app = express();
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
  data.addStudent(red.body);
  res.send({student: newStudent});
}

module.exports = router
