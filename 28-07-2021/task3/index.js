const expess = require("express");
const app = expess();
 
//app.use(expess.static('public'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/htmlformUsingJS.html");
})

app.listen(5009,()=>{
    console.log("server started");
})