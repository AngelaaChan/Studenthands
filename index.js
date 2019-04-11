const express = require('express');
const router=require("./controller/router.js");
const path = require('path');
const PORT = process.env.PORT || 5000;

var app=express();

//var a=[{"name":"name1","age":1},{"name":"name2","age":2},{"name":"name3","age":3}];
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("./public"));


app.get("/",router.getIndex);

app.get("/findstudentname/:name",router.showstudentByName);

app.get("/findstudentsubject/:subject",router.showstudentBySubject);

app.get("/findtutorname/:name",router.showtutorByName);

app.get("/findtutorsubject/:subject",router.showtutorBySubject);

app.get("/allstudent",router.showAllstudent);

app.get("/alltutor",router.showAlltutor);

app.get("/updatestudent",router.updateStudentInfo);

app.get("/updatetutor",router.updateTutorInfo);

app.get("/createstudent",router.createStudent);

app.get("/createtutor",router.createTutor);

app.get("/delstudent/:name",router.delStudent);

app.get("/deletetutor/:name",router.delTutor);



app.get("/api",function(req,res){
	findAllUser(``)
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


