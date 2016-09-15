var express = require('express');
var router = express.Router();
var app = express();
var data = require('../src/data');

function getAllCourses(req,res,next)
{
  res.json(data.getAllCourses());
}

router.route('/courses')
  .get(getAllCourses);

module.exports = router
