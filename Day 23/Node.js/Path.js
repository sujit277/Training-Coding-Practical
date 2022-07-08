var path = require('path');
strFilePath = "C:\Users\Sujitkumar_Verma\Pictures\Screenshots\test.js";
console.log(strFilePath);
var newPath  =  path.join('Main','SubMain','Test.js');
console.log(newPath);
console.log("File Extension: "+path.extname(strFilePath));
console.log("Directory Name: "+path.dirname(strFilePath));