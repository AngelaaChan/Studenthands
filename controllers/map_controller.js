var db = require("../models/user_db.js");


exports.findingpos = function(req,res){
    var lat = parseFloat(req.body.lat);
    var lng = parseFloat(req.body.lng);
    var pos = {"lat":lat,"lng":lng};
    console.log(req.body);
    db.findpos(pos,function(result){
        res.send(result);
    });
};

exports.findall = function(req,res){
    db.findallt(function(result){
        res.send(result);
    })
}

exports.findtutorsubj = function(req,res){
    req.on('data',function(data){
        console.log(data.toString());
        var subject = data.toString();
        db.findtutorsub(subject,function(result){
            res.send(result);
        });
    });
}