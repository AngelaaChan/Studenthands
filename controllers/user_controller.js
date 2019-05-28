var db = require("../models/user_db.js");


exports.Register = function(req,res){
    res.render("Register.ejs");
};

exports.login = function(req,res){
    res.render("Login.ejs");
};

exports.createUser = function(req,res){
    var id = req.body.identity;
    if (id == "student"){
        db.insertstudent(req.body,function(result){
            res.render("registersuccess.ejs");
        });
    }else{
        db.insertutor(req.body,function(result){
            res.render("registersuccess.ejs",{"identity":"tutor"});
        });
    };
};


exports.check_login = function(req,res){
    var id = req.body.identity;
    var user = {"username":req.body.username, "password":req.body.password};
    if (id == "student"){
        db.student_check_login(user,function(result){
            if (result){
                req.session.user = result;
                req.session.identity = "student";
                res.render("newindex.ejs",{"user":result});
            }else{
                res.render("Login.ejs");
            };  
        });
    }else if(id == "tutor"){
        db.tutor_check_login(user,function(result){
            if (result){
                req.session.user = result;
                req.session.identity = "tutor";
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


exports.changeinfo = function(req,res){
    var user=req.session.user;
    res.render("changeuserinfo.ejs",{"user":user});
}

exports.updateUserinfo = function(req,res){
    var user=req.session.user;
    user.subject= req.body.subject;
    user.email = req.body.email;
    user.suburb = req.body.suburb;
    user.university = req.body.university;
    db.findtutor(user.name,function(result){
        if (result){
            db.updatetutor(user,function(resul){
                res.render("userinfo.ejs",{"user":user});
            });
        }
    });
    db.findstudent(user.name,function(result){
        if (result){
            db.updatestudent(user,function(resul){
                res.render("userinfo.ejs",{"user":user});
            });
        };
    }); 
};