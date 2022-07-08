var dns = require('dns');
dns.lookup('www.google.com',(err,address,family)=>{
    console.log("Address: "+address);
    console.log("Family: "+family);
})