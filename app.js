const express=require("express");
const path=require("path");
const fs=require("fs");
var bodyParser=require('body-parser');
//const mongoose=require("mongoose");
//mongoose.connect('mongodb://localhost/MyOnlineFood',{useNewUrlParser:true});
const app=express();
const port=8000;


//EXPRESS SPECIFIC STUFFnod
// app.use(express.static('static',option));//
app.use('/static',express.static('static'));//THIS IS FOR SERVING STATIC FILE.
app.use(express.urlencoded());//THIS IS FOR OBTAIN DATA FILLED IN FORM


//PUG SPECIFIC STUFF
app.set('view engine','pug')//set the template engine
app.set('views',path.join(__dirname,'views'))//set the views directory

//END POINSTS
app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('findGym.pug',params);
})


//start the server
app.listen(port,()=>{
    console.log("the application started successfully");
})