var db = require("../models/discussion_db.js");


exports.DiscussionBoard = function(req,res){
    var user = req.session.user;
    db.find_question(function(result){
        res.render("discussion.ejs",{"user":user,"questions":result});
    });
}

exports.postquestion = function(req,res){
    var user=req.session.user;
    var question = req.body.question;
    var description = req.body.description;
    db.insert_question(user.name,question,description);
    db.find_question(function(result){
        res.render("discussion.ejs",{"user":user,"questions":result});
    });
};

exports.answerquestion = function(req,res){
    var user=req.session.user;
    var ans = {"ans":req.body.answer,"poster":user.name};
    var question = req.params.question;
    db.answer_question(question,ans);
    db.find_question(function(result){
        res.render("discussion.ejs",{"user":user,"questions":result});
    });
};