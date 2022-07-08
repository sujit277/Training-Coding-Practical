const Sequelize = require('sequelize');
const dbConfig = require("./db.config");

// Sequelize object is created with DB Parameters
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle

    }
})

//Connects to the Database and Checks whether Everything is fine or not
sequelize.authenticate().then(() => {
    console.log("Successfully Connected with the Database");
}).catch((err) => {
    console.log("Unable to Connect with the Database");
})

let ProductSequelize = sequelize.define('productsequelize', {
    Product_ID: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    ProductName: Sequelize.STRING,
    Descriptions: Sequelize.STRING,
    Cost: Sequelize.INTEGER,
}, {
    timestamps: false,
    freezeTableName: true
})

ProductSequelize.sync().then(()=>{
    console.log("Table ProductSequelize Defined Succesfully");
}).catch((err)=>{
    console.log("Error While Creating a table");
})

//Fetching Record by ID(Primary Key)
/* ProductSequelize.findByPk(102).then((data) => {
    console.log(data.dataValues);
}).catch((err) => {
    console.log("Unable to fetch Data from the Database" + err);
}) */

//Fetching All Records
/* ProductSequelize.findAll({raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Unable to Fetch Data From ProductSequelize");
}) */

// Select * from productsequelize Where ProductName = "Fridge"
/* ProductSequelize.findAll({where:{ProductName:'Fridge'},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Error While Fetching Records"+err)
}) */

// Select * from productsequelize order by ProductName
/* ProductSequelize.findAll({order:['ProductName'],raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Unable to Fetch Records "+err);
}) */

//Select ProductName, Cost from productsequelize where ProductName = 'Fridge'
/* ProductSequelize.findAll({attributes:['Descriptions','Cost'],where:{ProductName:'Fridge'},raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Unable to Fetch Records "+err);    
}) */

//Executing Native SQL Query
/* sequelize.query("Select * from `productsequelize` where ProductName ='Fridge'",{type:Sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
}).catch((err)=>{
    console.log("Unable to Execute Native SQL Query: "+err);
}) */

//Select * From productsequelize where ProductName ='Fridge OR ProductName='Mobile'
/* const Op = Sequelize.Op;
ProductSequelize.findAll({where:{[Op.or]:[{ProductName:'Fridge'},{ProductName:'Mobile'}]
},raw:true}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("Unable to Fetch Data, "+err);
}) */

//Insert Into Sequelize
/* ProductSequelize.create({
    Product_ID:106,
    ProductName:"Fan",
    Descriptions:"Usha Fan",
    Cost:2500
}).then((data)=>{
    console.log("Record Inserted Successfully");
}).catch((err)=>{
    console.log("Unable to Insert Record: "+err);
}) */

//Another way of Inserting a Record is using Build() and Save()
/* let productObj = ProductSequelize.build({Product_ID:108,ProductName:"Water Purifier",Descriptions:"Aqua Guard Water Purifier",Cost:12000});
productObj.save();
console.log("Data Inserted SuccessFully"); */

//Update in Sequelize
/* ProductSequelize.update(
    {Descriptions:'Samsung Mobile'},
    {where:{Descriptions:'Anderiod Mobile'}}
).then((data)=>{
    console.log("Updated: "+data);
}).catch((err)=>{
    console.log("Unable to Update Record"+err);
}) */

//Delete in Sequelize
ProductSequelize.destroy({
    where:{Descriptions:'Samsung Washing Machine'}
}).then((data)=>{
    console.log(data+" Records Deleted Succesfully");
}).catch((err)=>{
    console.log("Could Not Delete a Record Because of Error "+err);
})