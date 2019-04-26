const express = require('express');
const router=require("./controller/router.js");
const path = require('path');
const PORT = process.env.PORT || 5000;
//var db = require("./models/db.js");
var app=express();




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("./public"));


app.get("/",router.getIndex);

app.get("/views/StudentRegister",router.StudentRegister);

app.get("/views/Login",router.login);

app.get("/views/searchTutor",router.searchTutor);

app.get("/findstudent/:name",router.findstudentbyname);

app.get("/findtutor/:name",router.findtutorbyname);

app.get("/findtutorate/:Rate",router.findtutorbyrate);

app.get("/findtutorsubject/:subject",router.findtutorbysub);

app.get("/allstudents",router.allstudents);

app.get("/alltutors",router.alltutors);

app.get("/newstudent",router.createStudent);

app.get("/newtutor",router.createTutor);

app.get("/updatestudentsubj",router.updateStudentsub);

app.get("/updatetutorsubj",router.updateTutorsub);

app.get("/updatestudentinfo",router.updateStudentinfo);

app.get("/updatetutorinfo",router.updateTutorinfo);

app.get("/delstudent/:name",router.delstudent);

app.get("/deltutor/:name",router.deltutor);
/*app.get("/api",function(req,res){
	findAllUser(``);
});*/



app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


