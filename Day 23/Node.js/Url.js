var url =  require('url');
address = "http://localhost:4200/Login?Uid=Charan&Pwd=Admin";
var urlParse = url.parse(address,true);
console.log(urlParse);
console.log("Host: "+urlParse.host);
console.log("Path: "+urlParse.path);
console.log("Search String: "+urlParse.search);

var qry = urlParse.query
console.log("UID of the search String is: "+qry.Uid);
console.log("Pwd of the Search String is: "+qry.Pwd);
