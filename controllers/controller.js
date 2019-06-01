var db = require("../models/db.js");


exports.getIndex = function(req,res){
    var user = req.session.user;
    res.render("newindex.ejs",{'user':user});
};


exports.ranking = function(req,res){
    var user = req.session.user;

    res.render("rank.ejs",{"user":user});
};

exports.Challenge = function(req,res){
    var user = req.session.user;

    res.render("challenge.ejs",{"user":user});
}

exports.searchTutorSub = function(req,res){
    var user= req.session.user;

    res.render("searchTutorSub.ejs",{"user":user});
};

exports.searchTutor = function(req,res){
    var user = req.session.user;

    res.render("searchTutor.ejs",{"user":user});
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

exports.findtutorbysub = function(req,res){
    db.findtutorsub(req.params.subject,function(tutors){
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

exports.updateStudentinfo = function(req,res){
    db.updatestudent(req.query,function(result){
        res.json(result);
    });
};

exports.updateTutorinfo = function(req,res){
    db.updatetutor(req.query,function(result){
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

exports.findtutorbymap = function(req,res){
    var user=req.session.user;
    res.render("googlemap.ejs",{"user":user});
}
