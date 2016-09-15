var _ = require('underscore');
var studentData = [
    {
        id: 1,
        name: "Le Thuy Hang",
        address: "OAMK",
        class: "Din100",
    },
    {
        id: 2,
        name: "Sio",
        address: "OAMK",
        class: "DPI100",
    },
    {
        id: 3,
        name: "Mai Thi Hang",
        address: "OAMK",
        class: "Din10SN",
    }
];

var courseData = [
    {
        id: 1,
        name: "math",
        description: "OAMK",
    },
    {
        id: 2,
        name: "math",
        description: "OAMK",
    },
    {
        id: 3,
        name: "math",
        description: "OAMK",
    }
];


var gradeData = [
    {
        courseName: "Arhihi",
        studentName: "Mama",
        courseGrade: "5",
    },
    {
        courseName: "Arhihi",
        studentName: "Mama",
        courseGrade: "5",
    },
    {
        courseName: "Arhihi",
        studentName: "Mama",
        courseGrade: "5",
    }
];




exports.getAllStudents = function() 
{
    return studentData;
}
exports.getAllCourses = function() 
{
    return courseData;
}
exports.getAllGrades = function() 
{
    return gradeData;
}

exports.getStudentById = function(id)
{
    return studentData.filter(function(student){
        if(student.id == id)
        {
            return student;
        }
    });
}
exports.getCourseById = function(id)
{
    return courseData.filter(function(course){
        if(course.id == id)
        {
            return course;
        }
    });
}

exports.addStudent = function(student)
{
    // var maxId = _.max(studentData, function(student) { return student.id });
    // console.log(maxID);
    var newStudent = { "id": parseInt(student.id), "name": student.name, "address": student.address, "class": student.class };
    studentData.push(newStudent);
    return newStudent;
}

exports.addCourse = function(course)
{
    var newCourse = { "id": parseInt(course.id), "name": course.name, "description": course.description };
    courseData.push(newCourse);
    return newCourse;
}
