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
                        "balance":0,
                        "message":[]};
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
                        "description":"",
                        "balance":0,
                        "rate":0,
                        "certification":tutor.certification,
                        "experience":tutor.experience,
                        "message":[]};
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
};

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

exports.checkduplicate=function(username,callback){
    var client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(err=>{
        var tutors=client.db("studenthands").collection("tutors");
        tutors.findOne({"username":username},function(err,result){
            callback(result);
            return;
        });
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

exports.update_messenge = function(user,message){
    var client = new MongoClient(url, {useNewUrlParser: true});
    client.connect(err=>{
        var tutors = client.db("studenthands").collection("tutors");
        tutors.updateOne({"name":user},
            {$push:{"message":message}});
    });
    client.close();
}

/*
exports.createquestion=function(question,callback){
    var client = new MongoClient(url, {useNewUrlParser: true});
    client.connect(err=>{
        var forum = client.db("studenthands").collection("forums");
        var newquestion = {"questioner_name": question.qname,
                            "question": question.question,
                            "answerer": "",
                            "answer": "",
                            "date": 
        }
    })
}
*/



