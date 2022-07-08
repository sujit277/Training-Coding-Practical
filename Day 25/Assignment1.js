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

let demoSequelize = sequelize.define('Demo', {
    Product_ID: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    ProductName: Sequelize.STRING,
}, {
    timestamps: false,
    freezeTableName: true
})

demoSequelize.sync().then(()=>{
    console.log("Table Demo Defined Succesfully");
}).catch((err)=>{
    console.log("Error While Creating a table");
})

demoSequelize.create({
    Product_ID:101,
    ProductName:"Washing Machine"
}).then((data)=>{
    console.log("Record Inserted Successfully");
}).catch((err)=>{
    console.log("Unable to Insert Record: "+err);
})

/* demoSequelize.findAll({raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Unable to Fetch Data From ProductSequelize");
}) */



