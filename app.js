const express = require('express');
const router=require("./controller/router.js");
const bodyParser=require("body-parser");
const path = require('path');
const PORT = process.env.PORT || 5000;
//var db = require("./models/db.js");
var app=express();




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",router.getIndex);

app.get("/Register",router.Register);

app.get("/Login",router.login);

app.get("/discussionforum",router.DiscussionBoard);

app.get("/challenge",router.Challenge);

app.get("/ranking",router.ranking);

app.post("/search",router.findtutorc);

app.get("/searchTutorSub",router.searchTutorSub);

app.get("/searchTutorRate",router.searchTutorRate);

app.get("/findstudent/:name",router.findstudentbyname);

app.get("/findtutor/:name",router.findtutorbyname);

app.get("/findtutorate/:Rate",router.findtutorbyrate);

app.get("/findtutorsubject/:subject",router.findtutorbysub);

app.get("/allstudents",router.allstudents);

app.get("/alltutors",router.alltutors);

app.post("/newuser",router.createUser);

app.get("/updatestudentsubj",router.updateStudentsub);

app.get("/updatetutorsubj",router.updateTutorsub);

app.get("/updatestudentinfo",router.updateStudentinfo);

app.get("/updatetutorinfo",router.updateTutorinfo);

app.get("/delstudent/:name",router.delstudent);

app.get("/deltutor/:name",router.deltutor);
/*app.get("/api",function(req,res){
	findAllUser(``);
});*/

//app.post("/");
app.get("/new",router.backup);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


