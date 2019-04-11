var list =[{"name":"name1","age":1},{"name":"name2","age":2},{"name":"name3","age":3}];

var findUserByName = function(name,callback){
	(function iterator(i){
		if(i<list.length){
			if(name==list[i].name){
				callback(list[i]);
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

var createUser = function(query,callback){
	list.push(query);
	callback(list);
};

var updateUser = function(query,callback){
	var name = query.name;
	(function iterator(i){
		if(i<list.length){
			if(name==list[i].name){
				list[i].age = query.age;
				callback(list);
				return;
			}else{
				iterator(i+1);
				return;
			}
		}else{
			callback(list);
			return;
		}
	})(0);
};



module.exports.findUserByName = findUserByName;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;



