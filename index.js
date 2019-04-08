const express = require('express')
const router=require("./controller/router.js");
const path = require('path')
const PORT = process.env.PORT || 5000

var app=express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.get("/",router.getIndex);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
