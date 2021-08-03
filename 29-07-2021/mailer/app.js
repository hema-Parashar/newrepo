//include modules
const fs = require("fs");
const express = require("express");
const nodemailer = require("nodemailer");

//made our app as express app
const app = express();

//use public folder for static files
app.use(express.static('public'));

//Middleware to get html form data
app.use(express.json());
app.use(express.urlencoded());

//our end points
app.get('/',(req,res)=> {
    res.sendFile(__dirname+"/public/index.html");
})

app.post('/', (req,res)=>{

    // console.log(req.body.mailId);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hema.p.addweb@gmail.com',
          pass: 'Addweb#0107'
        },
        tls:{
          rejectUnauthorized:false
        }
      });
    var mailOptions = {
        from: 'hema.p.addweb@gmail.com',
        to: req.body.mailId,
        subject: req.body.subject,
        text: req.body.msg
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
  });

  res.sendFile(__dirname+"/public/index.html");
})




//listen on port
app.listen(5555,()=>{
    console.log("server start on port 5555");
});