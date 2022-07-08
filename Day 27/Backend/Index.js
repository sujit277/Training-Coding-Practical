//Day27
var express = require("express");
var Sequelize = require("sequelize");
var db = require("./db.config");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(db.DB,db.USER,db.PASSWORD,{
    host:db.HOST,
    dialect:db.dialect,
    pool:{
        max:db.pool.max,
        min:db.pool.min,
        acquire:db.pool.acquire,
        idle:db.pool.idle
    }
});

let employeeTable = sequelize.define('employee',{
    firstName:Sequelize.STRING,
    lastName:Sequelize.STRING,
    emailId:{
        primaryKey:true,
        type:Sequelize.STRING
    },
    designation:Sequelize.STRING,
    mobileNo:Sequelize.STRING},{
        timestamps:false,
        freezeTableName:true
});

employeeTable.sync().then(()=>{
    console.log("Created/Connected  EmployeeTable");
}).catch((err)=>{
    console.log("Unable to Create/Connect with the EmployeeTable ");
})

app.get("/getAllEmployees",(req,res)=>{
    employeeTable.findAll({raw:true}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        strErr = ("Error in Fetching Details from EmployeeTable"+err);
        res.send(strErr);
    })
})

app.post("/insertEmployee",(req,res)=>{
    firstName = req.body.firstName;
    lastName = req.body.lastName;
    emailId = req.body.emailId;
    designation = req.body.designation;
    mobileNo = req.body.mobileNo;

    let EmpOj = employeeTable.build({firstName:firstName,lastName:lastName,emailId:emailId,designation:designation,mobileNo:mobileNo});
    console.log(EmpOj);
    EmpOj.save().then((data)=>{
        strResult = "Records Inserted Succesfully";
        res.send(strResult);
    }).catch((err)=>{
        strErr = ("Unable to Insert Record"+err);
        res.send(strErr);
    })
})

app.delete("/deleteEmployee/:emailId",(req,res)=>{
    var emailId = req.params.emailId;
    employeeTable.destroy({where:{emailId:emailId}}).then(()=>{
        strResult = "Records Deleted Successfully";
        res.status(200).send(strResult);
    }).catch((err)=>{
        strErr = ("Unable to Delete the record "+err);
        res.status(400).send(strErr);
    })
})

app.put("/updateEmployee/:emailId",(req,res)=>{
    var emailId = req.params.emailId;
    firstName = req.body.firstName;
    lastName = req.body.lastName;
    emailId = req.body.emailId;
    designation = req.body.designation;
    mobileNo = req.body.mobileNo;

    employeeTable.update(
        {firstName:firstName,lastName:lastName,emailId:emailId,designation:designation,mobileNo:mobileNo},
        {where:{emailId:emailId}}
    ).then((data)=>{
        strResult = "Records Updated Successfully";
        res.status(201).send(strResult);
    }).catch((err)=>{
        strErr = ("Unable to Upadate Records"+err);
        res.status(400).send(strErr);
    })
})

app.listen(5000,()=>{
    console.log("Server Started at Port 5000");
})