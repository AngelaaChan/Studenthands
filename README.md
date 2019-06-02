# Studenthands

This is INFO30005, Group Keep Typing

### 1.Registering as a tutor/student 

For information audition, we are not strict with students yet. For tutors, we expect every tutor professional and eligible to provide good quality service. In order to ensure that, we make a phone call and send an email as soon as tutors data entered into the database. If and only if their information is confirmed to be true, their account and information will be published. This is also done for security reasons, we do not want random users to enter database with false information or hackers using SQL injection to invade the backend.

Student and Tutor: (Basic information are required for any user registering)

Basic information is required for any user register in: 

Username: 

Password:

Name:

Email:

University:

Subjects: (Subjects students pursuing or tutors would tute) 

Additional information for tutors:

Available time: 

- Start:     
- End:	
- Available days:

Experience: 

- Experience name:	
- Start Date: 	
- End Date:	
- Experience Description:

Education: 

- University/Education Institution name:	
- Start Date: 	
- End Date:	
- Experience Description:

Location: A simple click on google map to submit.

After login, more functionalities can be approached. On the top right corner, users can 

- check their own information, 
- Top up (this is not implemented yet)
- Message (check and send messages to other users)
- Logout 
- Discussion forum (can be accessed from navigation bar and homepage)

###### url: <https://studenthands.herokuapp.com/Register> or locally : <http://localhost:5000/Register>

###### controller: controllers/user_controller.js

###### database function: models/user_db.js

###### routes: routes/route.js

###### views: views/Register.ejs, tutorchoosemarker.ejs, registersuccess.ejs

### 2.Searching tutors by subject (Search in the search box)

We filter the result based on two factors:

- Subjects
- Gender

If there is no matching result, we will suggest results so that students can check all possible tutors. To realize this, we implement the filter by using MongoDB API so that satisfactory results can be found. The results will show the name and subjects of the tutors. Furthermore, to know more about the tutor experience and education, users can access it by clicking “MORE INFORMATION” button.

###### url: <http://localhost:5000/searchTutor> or locally: <http://localhost:5000/searchTutor>

###### support functionalities: get message url (must after login) :<https://studenthands.herokuapp.com/getmessage> locally:<http://localhost:5000/getmessage>

###### controller: controllers/search_controller.js

###### database function: models/search_db.js

###### routes: routes/route.js

###### views: views/searchTutor.ejs, searchtutorresult.ejs, tutorinfo.ejs, getmessage.ejs

### 3.Searching tutors by location (Powered by Google Map)

To visualize the exact locations of tutors. We use Google Map to present all the available tutors by makers. On the page of searching by location. Markers of tutors can be seen. By clicking the marker, a pop-up information window is available.  Users can access tutors profile via the hyperlink on their names.

users can search tutor by location. In this page, first of all is all of the tutors available and given coordinates will be on the map. By clicking the marker, a information window will show up with some basic information of the tutor, such as name and subject/s he/she is/are tutoring. By clicking their names, will directly goes to the tutor information page, and same as above, if you have logined, you can leave message to the tutor and wait for response. Also, you can type in the subject exactly you want to get help with and the marker will be update with the condition given (all of the tutors on the map will be match with the condition).

###### url: <https://studenthands.herokuapp.com/findbymap> or locally : <http://localhost:5000/findbymap>

###### controller: controllers/map_controller.js

###### database function: models/user_db.js

###### routes: routes/route.js

###### views: views/googlemap.ejs, tutorinfo.ejs, getmessage.ejs



## Testing

tutor testing account: username: qwert password:123456

student testing account: username: zxcvb password:123456

