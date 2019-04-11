const express = require('express');
const router=require("./controller/router.js");
const path = require('path');
const PORT = process.env.PORT || 5000;

var app=express();

var a=[{"name":"name1","age":1},{"name":"name2","age":2},{"name":"name3","age":3}];
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("./public"));


app.get("/",router.getIndex);

app.get("/findstudent/",function(req,res){
    res.json(a); 

});
app.get("/user/:name",router.showUser);

app.get("/api",function(req,res){
	findAllUser(``)
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


