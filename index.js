 const express = require("express");
 const mongoose =require("mongoose");
 const dotenv =require("dotenv");
 const app=express();
 const pinRoute = require("./routes/pins");
 const userRoute = require("./routes/users");
 


 dotenv.config();

 app.use(express.json());
 app.use(function(req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});


 mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB is Connected....")
 }).catch(err=>console.log(err));

app.use("/api/users",userRoute);
app.use("/api/pins",pinRoute);

 app.listen(8800,()=>{
 console.log("Backend Server is Running......")
 })
