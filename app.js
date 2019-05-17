const express = require('express');
//const controller=require("./controller/controller.js");
const bodyParser=require("body-parser");
const path = require('path');
const PORT = process.env.PORT || 5000;
var app=express();
var session = require("express-session");

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	//cookie: { secure: true } 
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:false}));

var routes = require('./routes/route.js');
app.use('/',routes);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


