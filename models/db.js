var MongoClient=require('mongodb').MongoClient;
var url="mongodb+srv://admin:zxcvb123@cluster0-rxn4r.mongodb.net/test?retryWrites=true";

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

exports.findtutorate=function(rate,callback){
    var client = new MongoClient(url, {useNewUrlParser: true});
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.find({"rate":rate}).toArray(function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
};

exports.findtutorsub=function(subject,callback){
    var client = new MongoClient(url, {useNewUrlParser: true});
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.find({"subject":subject}).toArray(function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
}

exports.allstudent=function(callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students=client.db("studenthands").collection("students");
        students.find({}).toArray(function(err,result){
            callback(result);
            return;
        })
        return;
    });
    client.close();
};

exports.alltutor=function(callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.find({}).toArray(function(err,result){
            callback(result);
            return;
        })
        return;
    });
    client.close();
};



exports.delstudentbyname = function(name,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students = client.db("studenthands").collection("students");
        students.deleteOne({"name":name},function(err,result){
            callback(result);
        });
    });
    client.close()
};

exports.deltutorbyname = function(name,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors = client.db("studenthands").collection("tutors");
        tutors.deleteOne({"name":name},function(err,result){
            callback(result);
        });
    });
    client.close();
};

/*exports.checkduplicate=function(username,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.findOne({"username":username},function(err,result){
            callback(result);
            return;
        });
    });
    client.close();
};*/