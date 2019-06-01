# Studenthands
This is INFO30005, Group Keep Typing

### functionality 1: Registering as a tutor or a student. I will describe more about tutor registation because this is our core and student does not need to fill more information as tutor. As a tutor, they need to fill in their experience and their available time and days in a week, also a small information about the education background. after submitting the form, the tutor will directly going into another page for selecting their working or tutoring location in the google map api,they can choose multiple points as their locations. After choosing their position, they can now wait few minutes to use their account in our website.
#### url: https://studenthands.herokuapp.com/Register or locally : http://localhost:5000/Register
#### controller: controllers/user_controller.js
#### database function: models/user_db.js
#### routes: routes/route.js
#### views: views/Register.ejs,  tutorchoosemarker.ejs,  registersuccess.ejs

### functionality 2: Choosing subjects as filter to find tutors. In here students or non-login users or tutors can fill in the subjects they are looking for help with and click search, will directly to a resultpage with all tutors matches with the condtions. If the condition is fail to match, we will provide all tutors in the page for users to have a look. Then if users are interesting with any tutors, they can click more information and directly going to the tutor's information page. If the user have log in with any account, they can also see a box which they can leave message to tutors and wait for their response. user's message can see by clicking the top-left username icon, and there are a message option. Inside there, All of the message you received will be there.
#### url: http://localhost:5000/searchTutor or locally: http://localhost:5000/searchTutor
#### support functionalities: get message url (must after login) :https://studenthands.herokuapp.com/getmessage locally:http://localhost:5000/getmessage
#### controller: controllers/search_controller.js
#### database function: models/search_db.js
#### routes: routes/route.js
#### views: views/searchTutor.ejs,  searchtutorresult.ejs,  tutorinfo.ejs,  getmessage.ejs

### functionality 3: users can search tutor by location. In this page, first of all is all of the tutors available and given coordinates will be on the map. By clicking the marker, a information window will show up with some basic information of the tutor, such as name and subject/s he/she is/are tutoring. By clicking their names, will directly goes to the tutor information page, and same as above, if you have logined, you can leave message to the tutor and wait for response. Also, you can type in the subject exactly you want to get help with and the marker will be update with the condition given (all of the tutors on the map will be match with the condition).
#### url: https://studenthands.herokuapp.com/findbymap or locally : http://localhost:5000/findbymap
#### controller: controllers/map_controller.js
#### database function: models/user_db.js
#### routes: routes/route.js
#### views: views/googlemap.ejs,  tutorinfo.ejs,  getmessage.ejs

### tutor testing account: username: qwert  password:123456
### student testing account: username: zxcvb password:123456
