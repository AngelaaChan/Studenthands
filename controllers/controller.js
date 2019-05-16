
var db = require("../models/db.js");


exports.getIndex = function(req,res){
    var user = req.session.user;
    res.render("newindex.ejs",{'user':user});
};

exports.Register = function(req,res){
    res.render("Register.ejs");
};

exports.DiscussionBoard = function(req,res){
    var user = req.session.user;
    res.render("discussion.ejs",{'user':user});
}

exports.ranking = function(req,res){
    var user = req.session.user;

    res.render("rank.ejs",{"user":user});
};

exports.Challenge = function(req,res){
    var user = req.session.user;

    res.render("challenge.ejs",{"user":user});
}

exports.login = function(req,res){
    res.render("Login.ejs");
};

exports.searchTutorSub = function(req,res){
    var user= req.session.user;

    res.render("searchTutorSub.ejs",{"user":user});
};

exports.searchTutorRate = function(req,res){
    var user = req.session.user;

    res.render("searchTutorRate.ejs",{"user":user});
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

exports.createUser = function(req,res){
    var id = req.body.identity;
    if (id == "student"){
        db.insertstudent(req.body,function(result){
            res.render("registersuccess.ejs");
        });
    }
    else{
        db.insertutor(req.body,function(result){
            res.render("registersuccess.ejs");
        });
    };
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

exports.findtutorc = function(req,res){
    var user = req.session.user;
    for(var key in req.body){
        if (req.body[key] == ''){
            delete(req.body[key]);
        };
    };
    db.findtutorcondition(req.body,function(result){
        res.render("searchtutorresult.ejs",{"result":result,"user":user});
    });
};

exports.check_login = function(req,res){
    var id = req.body.identity;
    var user = {"username":req.body.username, "password":req.body.password};
    if (id == "student"){
        db.student_check_login(user,function(result){
            if (result){
                req.session.user = result;
                res.render("newindex.ejs",{"user":result});
            }else{
                res.render("Login.ejs");
            };  
        });
    }else if(id == "tutor"){
        db.tutor_check_login(user,function(result){
            if (result){
                req.session.user = result;
                res.render("newindex.ejs",{"user":result});
            }else{
                res.render("Login.ejs");
            };
        });
    };
};

exports.userinfo = function(req,res){
    var user = req.session.user;
    if(user){
        res.render("userinfo.ejs",{"user":user});
    }else{
        res.render("Login.ejs");
    }
};

exports.logout = function(req,res){
    var user=req.session.user;
    if(user){
        delete req.session.user;
        res.render("newindex.ejs",{"user":req.session.user});
    }else{
        res.render("newindex.ejs",{"user":req.session.user});
    }
}

exports.tutorinfo = function(req,res){
    var user = req.session.user;
    db.findtutor(req.params.name,function(result){
        res.render("tutorinfo.ejs",{"tutor":result,"user":user});
    });
}

exports.sendmtutor = function(req,res){
    var recname=req.params.username;
    var text=req.body.message;
    var user=req.session.user;
    var message={"sender":user.name,"text":text};
    db.update_messenge(recname,message);
    db.findtutor(recname,function(result){
        res.render("tutorinfo.ejs",{"user":user,"tutor":result});
    });
}

exports.getmessage = function(req,res){
    var user=req.session.user;
    db.findtutor(user.name,function(result){
        req.session.user=result;
        res.render("getmessage.ejs",{"user":user});
    });
}