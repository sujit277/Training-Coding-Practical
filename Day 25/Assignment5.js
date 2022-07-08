const Sequelize = require("sequelize");
const dbConfig = require('./db.config');

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

let employeeSequelize = sequelize.define('Employee', {
    Employee_ID: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    Employee_Name: Sequelize.STRING,
    Employee_Dept:Sequelize.STRING,
    Employee_Designation:Sequelize.STRING
});

employeeSequelize.sync().then(()=>{
    console.log("Table Employee Defined Succesfully");
}).catch((err)=>{
    console.log("Error While Creating a table");
})

/* employeeSequelize.bulkCreate([{
    Employee_ID:567,
    Employee_Name:"Sujit",
    Employee_Dept:"Software Engineering",
    Employee_Designation:"Junior Software Engineer "
},
{
    Employee_ID:876,
    Employee_Name:"Anjali",
    Employee_Dept:"Software Engineering",
    Employee_Designation:"Associate Software Engineer"
}]).then((data)=>{
    console.log("Records Inserted Successfully");
}).catch((err)=>{
    console.log("Unable to Insert Record: "+err);
}) */

employeeSequelize.findAll({raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Unable to Fetch Data From ProductSequelize");
})