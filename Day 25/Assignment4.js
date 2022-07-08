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

let movieSequelize = sequelize.define('Movie', {
    Movie_ID: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    Movie_Name: Sequelize.STRING,
    Movie_Type: Sequelize.STRING,
},{
    timestamps: false,
    freezeTableName: true
});

movieSequelize.sync().then(() => {
    console.log("Table Movie Defined Succesfully");
}).catch((err) => {
    console.log("Error While Creating a table");
})

/* movieSequelize.bulkCreate([{
    Movie_ID: 10091,
    Movie_Name: "Jurassic Park",
    Movie_Type: "Action"
},
{
    Movie_ID: 10056,
    Movie_Name: "The Royal Treatment",
    Movie_Type: "Love Story"
}]).then((data) => {
    console.log("Records Inserted Successfully");
}).catch((err) => {
    console.log("Unable to Insert Record: " + err);
}) */

movieSequelize.findAll({raw:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Unable to Fetch Data From ProductSequelize");
})