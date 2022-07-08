var express = require("express");
var Sequelize = require("sequelize");
var db = require("./db.config");
var app = express();
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

let employeeTable = sequelize.define('employeeTable',{
    Emp_Id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    Emp_Name:Sequelize.STRING,
    Dept:Sequelize.STRING,
    Designation:Sequelize.STRING},{
        timestamps:false,
        freezeTableName:true
});

employeeTable.sync().then(()=>{
    console.log("Created/Connected  EmployeeTable");
}).catch((err)=>{
    console.log("Unable to Create/Connect with the EmployeeTable ");
})

/* employeeTable.bulkCreate([{
    Emp_Id:567,
    Emp_Name:"Sujit",
    Dept:"Software Engineering",
    Designation:"Junior Software Engineer "
},
{
    Emp_Id:876,
    Emp_Name:"Anjali",
    Dept:"Software Engineering",
    Designation:"Associate Software Engineer"
}]).then((data)=>{
    console.log("Records Inserted Successfully");
}).catch((err)=>{
    console.log("Unable to Insert Record: "+err);
}) */

//get All the Employees
/* app.get("/getAllEmployees",(req,res)=>{
    employeeTable.findAll({raw:true}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        strErr = ("Error in Fetching Details from EmployeeTable"+err);
        res.status(400).send(strErr);
    })
}) */

//get Employee By Id
app.get("/getEmployeeById/:Id",(req,res)=>{
    var Id = req.params.Id;
    employeeTable.findByPk(Id).then((data)=>{
        console.log("Received Data is "+data);
        res.status(200).send(data);
    }).catch((err))
})

//Insert Record Into Database
/* app.post("/insertEmployee",(req,res)=>{
    Emp_Id = req.body.Emp_Id;
    Emp_Name = req.body.Emp_Name;
    Dept = req.body.Dept;
    Designation = req.body.Designation;

    let EmpOj = employeeTable.build({Emp_Id:Emp_Id,Emp_Name:Emp_Name,Dept:Dept,Designation:Designation});
    EmpOj.save().then((data)=>{
        strResult = "Records Inserted Succesfully";
        res.status(201).send(strResult);
    }).catch((err)=>{
        strResult = ("Unable to Insert Record"+err);
        res.status(400).send(strErr);
    })
}) */

//Update Employee
/* app.put("/updateEmployee",(req,res)=>{
    Emp_Id = req.body.Emp_Id;
    Emp_Name = req.body.Emp_Name;
    Dept = req.body.Dept;
    Designation = req.body.Designation;

    employeeTable.update(
        {Emp_Name:Emp_Name,Dept:Dept,Designation:Designation},
        {where:{Emp_Id:Emp_Id}}
    ).then((data)=>{
        strResult = "Records Updated Successfully";
        res.status(201).send(strResult);
    }).catch((err)=>{
        strErr = ("Unable to Upadate Records"+err);
        res.status(400).send(strErr);
    })
}) */

//Delete a Record
/* app.delete("/deleteEmployee/:Emp_Id",(req,res)=>{
    var Emp_Id = req.params.Emp_Id;
    employeeTable.destroy({where:{Emp_Id:Emp_Id}}).then(()=>{
        strResult = "Records Deleted Successfully";
        res.status(200).send(strResult);
    }).catch((err)=>{
        strErr = ("Unable to Delete the record "+err);
        res.status(400).send(strErr);
    })
}) */

app.listen(8000,()=>{
    console.log("Server is Started at 8000");
})