var fs = require('fs');
var data = "";
var readerstream = new fs.createReadStream('demo.txt');
readerstream.on('data',function (readData){
    data = readData;
})

readerstream.on('end',function (){
    console.log("ReadData is:"+data)
})

readerstream.on('error',function (err){
    console.log("Error While Reading the file is:"+err);
})