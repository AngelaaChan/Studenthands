var MongoClient=require('mongodb').MongoClient;
var url="mongodb+srv://admin:zxcvb123@cluster0-rxn4r.mongodb.net/test?retryWrites=true";

exports.findtutorcondition=function(condition,callback){
    var client = new MongoClient(url, {useNewUrlParser: true});
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.find(condition).toArray(function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
}

exports.update_tmessenge = function(user,message){
    var client = new MongoClient(url, {useNewUrlParser: true});
    client.connect(err=>{
        var tutors = client.db("studenthands").collection("tutors");
        tutors.updateOne({"name":user},
            {$push:{"message":message}});
    });
    client.close();
}

exports.update_smessage = function(user,message){
    var client = new MongoClient(url, {useNewUrlParser:true});
    client.connect(err=>{
        var students = client.db("studenthands").collection("students");
        students.updateOne({"name":user},
            {$push:{"message":message}});
    });
    client.close();
};

exports.findtutor=function(name,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.findOne({"name":name},function(err,result){
            callback(result);
            return;
        })
        return;
    });
    client.close();
};