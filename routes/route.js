var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');

var diss_controller = require('../controllers/disscussion_controller.js');

var user_controller = require('../controllers/user_controller.js');

var search_controller = require('../controllers/search_controller.js');

var map_controller = require('../controllers/map_controller.js');

router.get("/",controller.getIndex);


//user information routes
router.get("/Register",user_controller.Register);

router.get("/Login",user_controller.login);

router.get("/Logout",user_controller.logout);

router.post("/checkLogin",user_controller.check_login);

router.get("/userinfo",user_controller.userinfo);

router.post("/updateinfo",user_controller.updateUserinfo);

//register
router.post("/newuser",user_controller.createUser);

router.get("/changeinfo",user_controller.changeinfo);

router.post("/addmarker",user_controller.updatemarker);

router.get("/registSuccess",user_controller.registtutor);

router.get("/challenge",controller.Challenge);

router.get("/ranking",controller.ranking);


//backend
router.get("/searchTutorSub",controller.searchTutorSub);

router.get("/searchTutorRate",controller.searchTutorRate);

router.get("/findstudent/:name",controller.findstudentbyname);

router.get("/findtutor/:name",controller.findtutorbyname);

router.get("/findtutorate/:Rate",controller.findtutorbyrate);

router.get("/findtutorsubject/:subject",controller.findtutorbysub);

router.get("/allstudents",controller.allstudents);

router.get("/alltutors",controller.alltutors);

router.get("/updatestudentsubj",controller.updateStudentsub);

router.get("/updatetutorsubj",controller.updateTutorsub);

router.get("/updatestudentinfo",controller.updateStudentinfo);

router.get("/updatetutorinfo",controller.updateTutorinfo);

router.get("/delstudent/:name",controller.delstudent);

router.get("/deltutor/:name",controller.deltutor);




//finding tutor information
router.post("/search",search_controller.findtutorc);

router.get("/tutorinfo/:name",search_controller.tutorinfo);

router.get("/getmessage",search_controller.getmessage);

router.post("/replymessage/:name",search_controller.replymessage);

router.post("/sendmessage/:username",search_controller.sendmtutor);


//disscussion board routes
router.get("/discussionforum",diss_controller.DiscussionBoard);

router.post("/postquestion",diss_controller.postquestion);

router.post("/answerquestion/:question",diss_controller.answerquestion);


//google map
router.get("/findbymap",controller.findtutorbymap);

router.post("/findpos",map_controller.findingpos);

router.post("/googlemap",map_controller.findall);

module.exports = router;