var fs = require('fs');
fs.readFile('Write.txt',function(err,data){
    if(err){
        console.log("There is an Error reading the Data"+err);
    }
    else{
        console.log("Asynchronus Data read from the File is "+data);
    }
})

var dataSync = fs.readFileSync('Write.txt');
console.log("Synchronus Data read from the File is"+dataSync)