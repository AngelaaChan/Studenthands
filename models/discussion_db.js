var MongoClient=require('mongodb').MongoClient;
var url="mongodb+srv://admin:zxcvb123@cluster0-rxn4r.mongodb.net/test?retryWrites=true";

exports.insert_question = function(poster,question,description){
    var client = new MongoClient(url,{useNewUrlParser:true});
    var q = {"question":question,"description":description,"poster":poster,answer:[]};
    client.connect(err=>{
        var forums = client.db("studenthands").collection("forums");
        forums.insertOne(q,function(err,result){
            callback(result);
            return;
        });
    });
    client.close();
}

exports.answer_question = function(question,answer){
    var client = new MongoClient(url,{useNewUrlParser:true});
    client.connect(err=>{
        var forums = client.db("studenthands").collection("forums");
        forums.updateOne({"question":question},
                        {$push:{"answer":answer}
                    });
        return;
    });
    client.close();
};

exports.find_question = function(callback){
    var client = new MongoClient(url, {useNewUrlParser: true});
    client.connect(err=>{
        var forums=client.db("studenthands").collection("forums");
        forums.find({}).toArray(function(err,result){
            callback(result);
            return;
        });
        return;
    });
    client.close();
};