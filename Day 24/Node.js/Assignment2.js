var express = require("express");
var app = express();
app.use(express.json());
app.get("/getAllEmployeeData", function (req, res) {
    var employeeArr = [
        {
            Id: "10100918",
            Name: "Anjali Kumari",
            Dept: "Software Engineering",
            Designation: "Associate Software Engineer"
        },
        {
            Id: "904065",
            Name: "Sujit Verma",
            Dept: "Software Engineering",
            Designation: "Junior Software Engineer"
        }
    ];
    res.send(employeeArr);
})

app.listen(8000, () => {
    console.log("Server is Running at Port 8000");
})