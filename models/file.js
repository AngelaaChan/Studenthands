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


var findstudentByName = function(name,callback){
	(function iterator(i){
		if(i<studentlist.length){
			if(name==studentlist[i].name){
				callback(studentlist[i]);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(null);
			return;
		}
	})(0);
};

var findtutorByName = function(name,callback){
	(function iterator(i){
		if(i<tutorlist.length){
			if(name==tutorlist[i].name){
				callback(tutorlist[i]);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(null);
			return;
		}
	})(0);
};

var findstudentBySubject = function(subject,callback){
	(function iterator(i){
		if(i<studentlist.length){
			if(subject==studentlist[i].subject){
				callback(studentlist[i]);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(null);
			return;
		}
	})(0)
};

var findtutorBySubject = function(subject,callback){
	(function iterator(i){
		if(i<tutorlist.length){
			if(subject==tutorlist[i].subject){
				callback(tutorlist[i]);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(null);
			return;
		}
	})(0)
};

var addStudent = function(query,callback){
	studentlist.push(query);
	callback(studentlist);
};

var addTutor = function(query,callback){
	tutorlist.push(query);
	callback(tutorlist);
}

var updateStudent = function(query,callback){
	var name = query.name;
	//callback(studentlist);
	(function iterator(i){
		if(i<studentlist.length){
			if(name==studentlist[i].name){
				studentlist[i].age = query.age;
				studentlist[i].subject = query.subject;
				callback(studentlist);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(studentlist);
			return;
		}
	})(0);
};

var updateTutor = function(query,callback){
	var name = query.name;
	//callback(tutorlist);
	(function iterator(i){
		if(i<tutorlist.length){
			if(name==tutorlist[i].name){
				tutorlist[i].age = query.age;
				tutorlist[i].subject = query.subject;
				callback(tutorlist);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(tutorlist);
			return;
		}
	})(0);
};

var deleteStudent = function(name,callback){
	(function iterator(i){
		if(i<studentlist.length){
			if(name==studentlist[i].name){
				studentlist.splice(i,1);
				callback(studentlist);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(null);
			return;
		}
	})(0);
};

var deleteTutor = function(name,callback){
	(function iterator(i){
		if(i<tutorlist.length){
			if(name==tutorlist[i].name){
				tutorlist.splice(i,1);
				callback(tutorlist);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(null);
			return;
		}
	})(0);
};

var allStudent = function(callback){
	callback(studentlist);
	return;
};

var allTutor = function(callback){
	callback(tutorlist);
	return;
}

module.exports.findtutorByName = findtutorByName;
module.exports.findstudentByName = findstudentByName;
module.exports.findstudentBySubject = findstudentBySubject;
module.exports.findtutorBySubject = findtutorBySubject;
module.exports.addStudent = addStudent;
module.exports.addTutor = addTutor;
module.exports.updateStudent = updateStudent;
module.exports.updateTutor = updateTutor;
module.exports.allStudent = allStudent;
module.exports.allTutor = allTutor;
module.exports.deleteTutor = deleteTutor;
