var express = require('express');
var app = express();
app.use(express.json());
app.post("/", function (req, res) {
    var Uid = req.body.Uid;
    var Pwd = req.body.Pwd;
    strData = `Given Data is UID is ${Uid} and Password: ${Pwd}`;
    console.log(strData);
    strResult = "You are not a Valid User,Pls Check the Credentials..";
    if (Uid == "Sujit" && Pwd == "Admin") {
        strResult = "You are a Valid User,Welcome" + Uid;
    }
    res.send(strResult);
})

app.listen(8000, function () {
    console.log("Server is Running at Port Number 8000");
})