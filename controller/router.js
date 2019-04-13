
var db = require("../models/db.js");

exports.getIndex = function(req,res){
    res.render("index2.ejs");
};

exports.findstudentbyname = function(req,res){

    db.findstudent(req.params.name,function(student){
        res.json(student);
    });
};

exports.findtutorbyname = function(req,res){
    db.findtutor(req.params.name,function(tutor){
        res.json(tutor);
    });
};

exports.findtutorbyrate = function(req,res){
    db.findtutorate(parseInt(req.params.Rate),function(tutors){
        res.json(tutors);
    });
};

exports.allstudents = function(req,res){
    db.allstudent(function(students){
        res.json(students);
    });
};

exports.alltutors = function(req,res){
    db.alltutor(function(tutors){
        res.json(tutors);
    });
};

exports.createStudent = function(req,res){
    db.insertstudent(req.query,function(result){
        res.json(result);
    });
};

exports.createTutor = function(req,res){
    db.insertutor(req.query,function(result){
        res.json(result);
    });
};

exports.updateStudentsub = function(req,res){
    db.updatestudentsubject(req.query,function(result){
        res.json(result);
    });
};

exports.updateTutorsub = function(req,res){
    db.updatetutorsubject(req.query,function(result){
        res.json(result);
    });
};

exports.delstudent = function(req,res){
    db.delstudentbyname(req.params.name,function(result){
        res.json(result);
    });
};
exports.deltutor = function(req,res){
    db.deltutorbyname(req.params.name,function(result){
        res.json(result);
    });
};