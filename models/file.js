var tutorlist =[{"name":"name1","age":1,"subject":"Maths"},
				{"name":"name2","age":2,"subject":"Physics"},
				{"name":"name3","age":3,"subject":"Chemical"}];
var studentlist = [{"name":"abc","age":11,"subject":"English"},
				   {"name":"def","age":22,"subject":"IT"},
				   {"name":"ghi","age":33,"subject":"Chemical"}];
/*
	student :{
		"name": String
		"age": int
		"University": String
		"Gender" : String
		"Email" : String
		"subject" : String
		"Balance" : float
	}
	tutor :{
		"name": String
		"age": int
		"University": String
		"Gender" : String
		"Email" : String
		"subject" : String
		"personal description" : String
		"Balance" : float
		"Rate" : float
		"Suburb" : String
	}
 */

const mongoose = require("mongoose");

var studentSchema = mongoose.Schema(
    {
        "name":String,
        "age":String,
        "subject":String,
        "University":String,
        "Gender":String,
        "Balance":String
    }
);
mongoose.model('student',studentSchema);
var student = mongoose.model('student');

const uri = "mongodb+srv://admin:zxcvb123@cluster0-rxn4r.mongodb.net/test?retryWrites=true";

mongoose.connect(uri,{ useNewUrlParser: true });

const con = mongoose.connection;
con.on('err',console.error.bind(console,"disconnect"));
con.once('open',function(){
    console.log("connected");
});


