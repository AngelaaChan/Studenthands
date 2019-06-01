var db = require("../models/user_db.js");
var fs = require("fs");

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
            res.render("registersuccess.ejs",{"identity":"student"});
        });
    }else{
        
        console.log(123);
        var experience = {"exptitle":req.body.exptitle,"sdate":req.body.sdate,"edate":req.body.edate,"expdes":req.body.experiencedescrip};
        var university = {"uni_name":req.body.uni_name,"uni_sdate":req.body.uni_sdate,"uni_edate":req.body.uni_edate};
        req.body.experience = experience;
        req.body.university = university;
        console.log(req.body);
        db.insertutor(req.body,function(result){
            console.log(321);
            console.log(result);
            
            db.findtutor(req.body.name,function(tutor){

                req.session.user = tutor;
                console.log(tutor);
                //console.log(123);
                res.render("tutorchoosemarker.ejs");
            });
            
        });
        //res.render("tutorchoosemarker.ejs");
       
    };
};

exports.updatemarker = function(req,res){
    var user = req.session.user;
    req.on('data',function(data){
        var m = data.toString().split('&');
        var lat = parseFloat(m[0].split("\"")[1]);
        var lng = parseFloat(m[1]);
        console.log(lat);
        console.log(lng);
        console.log(user);
        var coord = {"lat":lat,"lng":lng};
        db.addmarker(user,coord);

    });
    //var lat = parseFloat(req.query.lat);
    //var lng = parseFloat(req.query.lng);
    //var coord = {"lat":lat,"lng":lng};
    //db.addmarker()
}


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

exports.registtutor = function(req,res){
    res.render("registersuccess.ejs",{"identity":"tutor"});
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

/*exports.picpost=function(req,res,next){
    var form=new formidable.IncomingForm();
    form.uploadDir="/Users/Ken/Desktop/2019SM1/INFO30005/INFO30005-2019-PW/public/image";
    form.parse(req,function(err,fields,files){
        var oldpath=files.picture.path;
        var newpath="/Users/Ken/Desktop/2019SM1/INFO30005/INFO30005-2019-PW/public/image/"+fields.name+".jpg";
        fs.rename(oldpath,newpath,function(err){
            if(err){
                console.log(req.body.name);
                next();
            }else{
                var id = fields.identity;
                for (var i=0;i<fields.subject.length;i++){
                    if (fields.subject[i] == ''){
                        fields.subject.splice(i,1);
                    }
                }
                fields.picture = newpath;
                console.log(fields);
                if (id == "student"){
                    db.insertstudent(fields,function(result){
                        res.render("registersuccess.ejs",{"identity":"student"});
                    })
                }else{
                    db.insertutor(fields,function(result){
                        res.render("registersuccess.ejs",{"identity":"tutor"});
                    });
                };
            }
        });
    });
}*/