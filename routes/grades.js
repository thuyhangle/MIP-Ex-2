var express = require('express');
var router = express.Router();
var app = express();
var data = require('../src/data');

function getAllGrades(req,res,next)
{
  res.json(data.getAllGrades());
}

router.route('/grades')
  .get(getAllGrades);

module.exports = router
