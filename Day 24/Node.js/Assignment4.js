var express = require('express');
var app = express();
app.use(express.json());
var employeeArr = [
    {
        Id: 10100918,
        Name: "Anjali Kumari",
        Dept: "Software Engineering",
        Designation: "Associate Software Engineer"
    },
    {
        Id: 904065,
        Name: "Sujit Verma",
        Dept: "Software Engineering",
        Designation: "Junior Software Engineer"
    },
    {
        Id: 879885,
        Name: "Chandani Verma",
        Dept: "Software Engineering",
        Designation: "Senior Test Engineer"
    }
];

//Getting all Records 
app.get("/getAllEmployees", function (req, res) {
    res.send(employeeArr);
})

//Inserting Record into Array
app.post('/insertEmployeeData', (req, res) => {
    let data = req.body;
     if (data.Id != undefined && data.Name != undefined && data.Dept != undefined && data.Designation != undefined) {
        employeeArr.push(data);
        res.send("Record inserted successfully");
    } else {
        res.send("Unable to insert the record");
    }
});

//Updating Records Based on Id
app.put("/updateEmployeeData", (req, res)=>{
    let data = req.body;
    let flag = false;
    for(let i = 0; i<employeeArr.length; i++)
    {
      if(employeeArr[i].Id == data.Id){
        employeeArr[i].Name = data.Name;
        employeeArr[i].Dept = data.Dept;
        employeeArr[i].Designation = data.Designation;
        flag = true;
      }
    }
    if(flag)
      res.send("Data Updated Successfully");
    else
      res.send("Data Updated UnSuccessfull");
  })

//Deleteing Record for Particular ID
app.delete("/deleteRecord/:Id", (req, res)=>{
    let Id = req.params.Id;
    let index = -1;
    for(let i = 0; i<employeeArr.length; i++)
    {
      if(employeeArr[i].Id == Id){
        index = i;
        break;
      }
    } 
    if(index >-1){
      deleteObj = employeeArr.splice(index, 1);
    }
    res.send(JSON.stringify(deleteObj)); 
  });

  //Getting Records Based on ID
app.get("/getEmployeeById/:Id", (req, res) => {
    let Id = req.params.Id;
    let index = -1;
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].Id == Id) {
            index = i;
            break;
        }
    }
    if (index > -1)
        res.json(employeeArr[index]);
});

//Getting Record Based on Name
app.get("/getEmployeeByName", (req, res) => {
    let Name = req.query.Name;
    let empobj = [];
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].Name.includes(Name)) {
            empobj.push(employeeArr[i])
        }
    }
    res.json(empobj);
})
app.listen(8000, () => {
    console.log("Server is running at Port 8000");
})