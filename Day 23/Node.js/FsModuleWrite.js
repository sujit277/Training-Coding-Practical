var fs = require("fs");
var writeStream = fs.createWriteStream('Write.txt');
writeStream.write("My Company Name is EPAM Systems");

writeStream.on('finish',()=>{
    console.log("Writing into File is Complete");
});

writeStream.on('error',(err)=>{
    console.log("Error While Writing into file"+err);
});

writeStream.end("Done");