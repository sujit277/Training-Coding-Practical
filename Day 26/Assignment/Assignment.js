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

let policyTable = sequelize.define('policyTable',{
    Policy_Number:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    PolicyHolder_Name:Sequelize.STRING,
    PolicyAmt:Sequelize.INTEGER,
    MaturityAmt:Sequelize.INTEGER,
    Nominee:Sequelize.STRING},{
        timestamps:false,
        freezeTableName:true
});


policyTable.sync().then(()=>{
    console.log("Created/Connected  PolicyTable");
}).catch((err)=>{
    console.log("Unable to Create/Connect with the PolicyTable ");
})

/* policyTable.bulkCreate([{
    Policy_Number:100,
    PolicyHolder_Name:"Sujit Verma",
    PolicyAmt:3500,
    MaturityAmt:100000,
    Nominee:"Shailesh"
},
{
    Policy_Number:101,
    PolicyHolder_Name:"Anjali Verma",
    PolicyAmt:2500,
    MaturityAmt:200000,
    Nominee:"Shailesh"
}]).then((data)=>{
    console.log("Records Inserted Successfully");
}).catch((err)=>{
    console.log("Unable to Insert Record: "+err);
}) */

/* app.get("/getAllPolicies",(req,res)=>{
    policyTable.findAll({raw:true}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        strErr = ("Error in Fetching Details from EmployeeTable"+err);
        res.status(400).send(strErr);
    })
}) */

app.get("/getPolicyById/:Id",(req,res)=>{
    var Policy_Number = req.params.Id;
    policyTable.findByPk(Policy_Number).then((data)=>{
        console.log("Received Data is "+data);
        res.status(200).send(data);
    }).catch((err)=>{
        console.log("Unable to Fetch Details "+err);
    })
})

/* app.post("/insertPolicy",(req,res)=>{
    Policy_Number = req.body.Policy_Number;
    PolicyHolder_Name = req.body.PolicyHolder_Name;
    PolicyAmt = req.body.PolicyAmt;
    MaturityAmt = req.body.MaturityAmt;
    Nominee = req.body.Nominee;

    let PolicyOj = policyTable.build({Policy_Number:Policy_Number,PolicyHolder_Name:PolicyHolder_Name,PolicyAmt:PolicyAmt,MaturityAmt:MaturityAmt,Nominee:Nominee});
    PolicyOj.save().then((data)=>{
        strResult = "Records Inserted Succesfully";
        res.status(201).send(strResult);
    }).catch((err)=>{
        strResult = ("Unable to Insert Record"+err);
        res.status(400).send(strErr);
    })
}) */

/* app.put("/updatePolicy",(req,res)=>{
    Policy_Number = req.body.Policy_Number;
    PolicyHolder_Name = req.body.PolicyHolder_Name;
    PolicyAmt = req.body.PolicyAmt;
    MaturityAmt = req.body.MaturityAmt;
    Nominee = req.body.Nominee;

    policyTable.update(
        {PolicyHolder_Name:PolicyHolder_Name,PolicyAmt:PolicyAmt,PolicyAmt:PolicyAmt,MaturityAmt:MaturityAmt,Nominee:Nominee},
        {where:{Policy_Number:Policy_Number}}
    ).then((data)=>{
        strResult = "Records Updated Successfully";
        res.status(201).send(strResult);
    }).catch((err)=>{
        strErr = ("Unable to Upadate Records"+err);
        res.status(400).send(strErr);
    })
}) */

/* app.delete("/deletePolicy/:Policy_Number",(req,res)=>{
    var Policy_Number = req.params.Policy_Number;
    policyTable.destroy({where:{Policy_Number:Policy_Number}}).then(()=>{
        strResult = "Records Deleted Successfully";
        res.status(200).send(strResult);
    }).catch((err)=>{d
        strErr = ("Unable to Delete the record "+err);
        res.status(400).send(strErr);
    })
}) */



app.listen(8000,()=>{
    console.log("Server is Started at Port 8000");
})