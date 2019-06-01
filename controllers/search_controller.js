var db = require("../models/search_db.js");

exports.findtutorc = function(req,res){
    var user = req.session.user;
    db.findtutorcondition(req.body,function(result){
        if (result.length != 0){
            res.render("searchtutorresult.ejs",{"result":result,"user":user,"check":"no"});
        }
        else{
            db.findtutorall(function(tutors){
                res.render("searchtutorresult.ejs",{"result":tutors,"user":user,"check":"nores"});
            });
        }
    });
};


exports.tutorinfo = function(req,res){
    var user = req.session.user;
    db.findtutor(req.params.name,function(result){
        res.render("tutorinfo.ejs",{"tutor":result,"user":user});
    });
}

exports.sendmtutor = function(req,res){
    var recname=req.params.username;
    console.log(recname);
    var text=req.body.message;
    var user=req.session.user;
    var message={"sender":user.name,"text":text};
    db.update_tmessenge(recname,message);
    db.findtutor(recname,function(result){
        res.render("tutorinfo.ejs",{"user":user,"tutor":result});
    });
}


exports.replymessage = function(req,res){
    var recname = req.params.name;
    var text = req.body.message;
    var user = req.session.user;
    var id  = req.session.identity;
    var message = {"sender":user.name,"text":text};
    if (id == "student"){
        db.update_tmessenge(recname,message);
    }else{
        db.update_smessage(recname,message);
    }
    res.render("getmessage.ejs",{"user":user});
}


exports.getmessage = function(req,res){
    var user=req.session.user;
    db.findtutor(user.name,function(result){
        if(result){
            req.session.user=result;
            res.render("getmessage.ejs",{"user":user});
        }
    });
    db.findstudent(user.name,function(result){
        if(result){
            req.session.user=result;
            res.render("getmessage.ejs",{"user":user});
        };
    });
};

exports.findstudent=function(name,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students=client.db("studenthands").collection("students");
        students.findOne({"name":name},function(err,result){
            callback(result);
            return;
        })
        return;
    });
    client.close();
};
