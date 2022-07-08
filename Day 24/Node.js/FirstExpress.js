var express = require('express');
var app = express();
app.get("/",function(req,res){
    res.send("Welcome to the Server")
})

app.listen(8000,function(){
    console.log("Server is running at the Port Number at 8000");
})
