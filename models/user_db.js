var MongoClient=require('mongodb').MongoClient;
var url="mongodb+srv://admin:zxcvb123@cluster0-rxn4r.mongodb.net/test?retryWrites=true";

exports.insertstudent=function(student,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students = client.db("studenthands").collection("students");
        var oneStudent={"username":student.username,
                        "name":student.name,
                        "password":student.password,
                        "subject":student.subject,
                        "university":student.university,
                        "gender":student.gender,
                        "suburb":student.suburb,
                        "email":student.email,
                        "phone":student.phone,
                        "balance":0,
                        "message":[],
                        "coord":[],
                        };
        students.insertOne(oneStudent,function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
};

exports.insertutor=function(tutor,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors = client.db("studenthands").collection("tutors");
        var oneTutor={"username":tutor.username,
                        "name":tutor.name,
                        "password":tutor.password,
                        "subject":tutor.subject,
                        "university":tutor.university,
                        "gender":tutor.gender,
                        "suburb":tutor.suburb,
                        "email":tutor.email,
                        "phone":tutor.phone,
                        "balance":0,
                        "rate":0,
                        "certification":tutor.certification,
                        "experience":tutor.experience,
                        "start_time":tutor.stime,
                        "end_time":tutor.etime,
                        "message":[]};
        tutors.insertOne(oneTutor,function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
};

exports.updatestudent=function(student,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students = client.db("studenthands").collection("students");
        students.updateOne({"name":student.name},
            {$set:{"subject":student.subject,
                    "university":student.university,
                    "suburb":student.suburb,
                    "email":student.email}},function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
};

exports.updatetutor=function(tutor,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors = client.db("studenthands").collection("tutors");
        tutors.updateOne({"name":tutor.name},
            {$set:{"subject":tutor.subject,
                    "university":tutor.university,
                    "suburb":tutor.suburb,
                    "email":tutor.email
                    }},function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
};

exports.tutor_check_login=function(user,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.findOne({"username":user.username,"password":user.password},function(err,result){
            callback(result);
            return;
        });
    });
    client.close();
};

exports.student_check_login=function(user,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students=client.db("studenthands").collection("students");
        students.findOne({"username":user.username,"password":user.password},function(err,result){
            callback(result);
            return;
        });
    });
    client.close();
};

exports.findpos = function(pos,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.find({}).toArray(function(err,result){
            callback(result);
            return;
        });
    });
    client.close();
}

exports.findallt = function(callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.find({}).toArray(function(err,result){
            callback(result);
            return;
        });
    });
    client.close();
};