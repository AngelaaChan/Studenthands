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
        tutors.find({"Rate":rate}).toArray(function(err,result){
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

exports.insertstudent=function(student,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students = client.db("studenthands").collection("students");
        var oneStudent={"username":student.username,
                        "name":student.name,
                        "password":student.password,
                        "age":parseInt(student.age),
                        "subject":student.subject,
                        "university":student.university,
                        "gender":student.Gender,
                        "suburb":student.suburb,
                        "email":student.email,
                        "balance":0};
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
        var oneTutor={"name":tutor.name,
                        "age":parseInt(tutor.age),
                        "subject":tutor.subject,
                        "University":tutor.University,
                        "Gender":tutor.Gender,
                        "Balance":parseFloat(tutor.Balance),
                        "Rate":parseInt(tutor.Rate)};
        tutors.insertOne(oneTutor,function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
};

exports.updatestudentsubject=function(student,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students = client.db("studenthands").collection("students");
        students.updateOne({"name":student.name},{$set:{"subject":student.subject}},function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
};

exports.updatetutorsubject=function(tutor,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors = client.db("studenthands").collection("tutors");
        tutors.updateOne({"name":tutor.name},{$set:{"subject":tutor.subject}},function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
}

exports.updatestudent=function(student,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var students = client.db("studenthands").collection("students");
        students.updateOne({"name":student.name},
            {$set:{"subject":student.subject,
                    "age":parseInt(student.age),
                    "Gender":student.Gender,
                    "Balance":parseFloat(student.Balance)}},function(err,result){
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
                    "age":parseInt(tutor.age),
                    "University":tutor.University,
                    "Gender":tutor.Gender,
                    "Balance":parseFloat(tutor.Balance),
                    "Rate":parseInt(tutor.Rate)}},function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
}

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

//collection.update({a:996}, {$set: {a:997}}, function(error, bars){});
//updatestudentsubject({"name":"Bob","subject":"Chemistry"});

