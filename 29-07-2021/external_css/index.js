const expess = require("express");
const app = expess();
 
app.use(expess.static('public'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/external.html");
})

app.listen(5001,()=>{
    console.log("server started");
})

