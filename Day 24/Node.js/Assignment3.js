var express = require("express");
var app = express();
app.use(express.json());

app.post("/",function (req,res){
    var basic = req.body.basic;
    var hra = req.body.hra;
    var da = req.body.da;
    var it = req.body.it;

    var sum = basic+hra+da+it;
    res.send("Total Salary is "+sum);
});

app.listen(8000,()=>{
    console.log("Server is Started at Port 8000");
})
