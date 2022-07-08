var express  = require("express");
var app = express();
app.use(express.json());
app.post("/",function (req,res){
    var Uid = req.body.Uid;
    var Pwd = req.body.Pwd;
    var strData = "Invalid User";
    if(Uid == "Sujit" && Pwd == "Admin"){
        strData = "Valid User";
    }
    res.send(strData);
})

app.listen(8000,()=>{
    console.log("Server is Running at Port Number 8000")
})