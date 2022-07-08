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

let userTable = sequelize.define('UserTable',{
    User_Id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    Password:Sequelize.STRING},{
        timestamps:false,
        freezeTableName:true
});

userTable.sync().then(()=>{
    console.log("Created/Connected  UserTable");
}).catch((err)=>{
    console.log("Unable to Create/Connect with the UserTable ");
})

userTable.bulkCreate([{
    User_Id:2345,
    Password:"Sujit7941"
},
{
    User_Id:3378,
    Password:"Anjali3456"
}]).then((data)=>{
    console.log("Records Inserted Successfully");
}).catch((err)=>{
    console.log("Unable to Insert Record: "+err);
})

app.get("/getAllUsers",(req,res)=>{
    userTable.findAll({raw:true}).then((data)=>{
        //res.status(200).send(data);
        flag = false;
        for(let i=0;i<data.length;i++){
            if(data[i].User_Id == 2345 && data[i].Password == "Sujit7941"){
                flag = true;
            }
        }
        if(flag){
            res.status(200).send("Valid User");
        }
        else{
            res.status(200).send("Invalid User");
        }    
    }).catch((err)=>{
        strErr = ("Error in Fetching Details from UserTable"+err);
        res.status(400).send(strErr);
    })
})

app.listen(8000,()=>{
    console.log("Server Started at Port 8000");
})