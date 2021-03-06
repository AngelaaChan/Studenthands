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
                        "email":student.email,
                        "phone":student.phone,
                        "message":[],
                        "profile":student.picture,
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
                        "email":tutor.email,
                        "phone":tutor.phone,
                        "rate":0,
                        "certification":tutor.certification,
                        "experience":tutor.experience,
                        "start_time":tutor.stime,
                        "end_time":tutor.etime,
                        "message":[],
                        "coord":[],
                        "workingday":tutor.workingday,
                        //"profile":tutor.picture
                        };
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
            {$set:{ "university":student.university,
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


exports.addmarker = function(user,coord,callback){
    var client = new MongoClient(url, {useNewUrlParser:true});
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.updateOne({"name":user.name},{$push:{"coord":coord}});
        return;
    });
    client.close();
}


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

exports.findtutorsub = function(subject,callback){
    var client = new MongoClient(url, {useNewUrlParser: true});
    client.connect(err=>{
        var tutors = client.db("studenthands").collection("tutors");
        var condition = {"subject":{$in:[subject]}};
        tutors.find(condition).toArray(function(err,result){
            callback(result);
        });
    });
    client.close();
};

