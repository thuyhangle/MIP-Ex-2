var express = require('express');
var bodyParser = require('body-parser');
var students = require('./routes/students');
var courses = require('./routes/courses');
var grades = require('./routes/grades');
var app = express();

// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 3000));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Mount our routes behind /api/ prefix
app.use('/api', students);
app.use('/api', courses);
app.use('/api', grades)

// Simple hello world route
app.get('/', function(req, res) {
    res.send("Hello class");
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.send("yo");
});

// start listening for incoming HTTP connections
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});