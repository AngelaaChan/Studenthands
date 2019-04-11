var file = require("../models/file");

exports.getIndex=function(req,res){
    res.render("index.ejs");
};

exports.showUser = function(req,res){
	file.findUserByName(req.params.name,function(user){
        res.json(user);
    });
};

export.
