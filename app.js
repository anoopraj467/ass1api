 const express = require("express");
 const bodyParser = require("body-parser");
 const ejs = require("ejs");
 const mongoose = require("mongoose");


 const app = express();

 app.set('view engine', 'ejs');

 app.use(bodyParser.urlencoded({
   extended: true
 }));

 app.use(express.static("public"));

 mongoose.connect("mongodb://localhost:27017/Ass1db",{useNewUrlParser: true, useUnifiedTopology: true});

 const deviceSchema = {
   device_id : Number,
   device_name: String
 };

 const locationSchema = {
   device_id : Number,
   locations: String
 };

const Device = mongoose.model("Device", deviceSchema);
const Location = mongoose.model("Location", locationSchema);

app.get("/devices", function(req, res){
  Device.find(function(err, foundDevices){
    if(!err){
    console.log(foundDevices);
  }
  else{
    console.log(err);
  }
  })
})

 app.listen(3000, function(){
   console.log("Server started on port 3000");
 });
