const fs = require("fs");
var res =  fs.readFileSync("filev.txt", "utf8");
 for(let i=0; i<res.length; i++)
 {
     res = res.replace("a","");
     res = res.replace("e","");
     res = res.replace("i","");
     res = res.replace("o","");
     res = res.replace("u","");
 }
 const finalres = fs.writeFileSync("finalfile.txt",res);
