var express = require('express');
var router = express.Router();
var app = express();
var data = require('../src/data');

function getAllCourses(req,res,next)
{
  res.json(data.getAllCourses());
}

router.route('/courses')
  .get(getAllCourses)
  .post(postNewCourse);

function postNewCourse(req,res,next)
{
  var newCourse = data.addCourse(req.body);
  res.send({course: newCourse});
}

module.exports = router
