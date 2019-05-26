var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');


router.get("/",controller.getIndex);

router.get("/Register",controller.Register);

router.get("/Login",controller.login);

router.get("/Logout",controller.logout);

router.post("/checkLogin",controller.check_login);

router.get("/userinfo",controller.userinfo);

router.get("/discussionforum",controller.DiscussionBoard);

router.get("/challenge",controller.Challenge);

router.get("/ranking",controller.ranking);

router.post("/search",controller.findtutorc);

router.get("/tutorinfo/:name",controller.tutorinfo);

router.post("/sendmessage/:username",controller.sendmtutor);

router.get("/searchTutorSub",controller.searchTutorSub);

router.get("/searchTutorRate",controller.searchTutorRate);

router.get("/findstudent/:name",controller.findstudentbyname);

router.get("/findtutor/:name",controller.findtutorbyname);

router.get("/findtutorate/:Rate",controller.findtutorbyrate);

router.get("/findtutorsubject/:subject",controller.findtutorbysub);

router.get("/allstudents",controller.allstudents);

router.get("/alltutors",controller.alltutors);

router.post("/newuser",controller.createUser);

router.get("/updatestudentsubj",controller.updateStudentsub);

router.get("/updatetutorsubj",controller.updateTutorsub);

router.get("/updatestudentinfo",controller.updateStudentinfo);

router.get("/updatetutorinfo",controller.updateTutorinfo);

router.get("/delstudent/:name",controller.delstudent);

router.get("/deltutor/:name",controller.deltutor);

router.get("/getmessage",controller.getmessage);

//router.post("/messagetostudent/:username",controller.sendmstudent);

router.post("/replymessage/:name",controller.replymessage);

router.post("/updateinfo",controller.updateUserinfo);

router.get("/changeinfo",controller.changeinfo);

router.get("/findbymap",controller.findtutorbymap);

router.post("/postquestion",controller.postquestion);

router.post("/answerquestion/:question",controller.answerquestion);

module.exports = router;