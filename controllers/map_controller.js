var db = require("../models/user_db.js");


exports.findingpos = function(req,res){
    var lat = parseFloat(req.body.lat);
    var lng = parseFloat(req.body.lng);
    var pos = {"lat":lat,"lng":lng};
    db.findpos(pos,function(result){
        res.send(result);
    });
};