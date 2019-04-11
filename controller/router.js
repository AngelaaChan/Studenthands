var file = require("../models/file");

exports.getIndex=function(req,res){
    res.render("index.ejs");
};

exports.showstudentByName = function(req,res){
	file.findstudentByName(req.params.name,function(student){
        res.json(student);
    });
};

exports.showtutorByName = function(req,res){
	file.findtutorByName(req.params.name,function(tutor){
        res.json(tutor);
    });
};

exports.showstudentBySubject = function(req,res){
    file.findstudentBySubject(req.params.subject,function(student){
        res.json(student);
    });
};

exports.showtutorBySubject = function(req,res){
    file.findtutorBySubject(req.params.subject,function(tutor){
        res.json(tutor);
    });
}

exports.showAllstudent = function(req,res){
    file.allStudent(function(students){
        res.json(students);
    });
}

exports.showAlltutor = function(req,res){
    file.allTutor(function(tutors){
        res.json(tutors);
    })
};

exports.updateStudentInfo = function(req,res){
    file.updateStudent(req.query,function(students){
        res.json(students);
    });
};

exports.updateTutorInfo = function(req,res){
    file.updateTutor(req.query,function(tutors){
        res.json(tutors);
    });
};

exports.createNewStudent = function(req,res){
    file.createStudent(req.query,function(students){
        res.json(students);
    });
};

exports.createNewTutor = function(req,res){
    file.createTutor(req.query,function(tutors){
        res.json(tutors);
    });
};

exports.delStudent= function(req,res){
    file.delStudent(req.params.name,function(students){
        res.json(students);
    });
};

exports.delTutor = function(req,res){
    file.deleteTutor(req.params.name,function(tutors){
        res.json(tutors);
    });
};