const express = require('express');
const path = require('path');
const { body, validationResult, check } = require('express-validator');
const upload = require('express-fileupload');
const port = 5002;
const app = express();


//use public folder for static files like css,html
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));



// ejs SPECIFIC STUFF(set view engine as ejs)
app.set('view engine', 'ejs');      //set the template engine as ejs
app.set('views', path.join(__dirname, '/views'));  //set the view directory

//const urlencodedParser = bodyParser.urlencodedParser({extended:false})

// Middleware to get html/ejs form data 
app.use(express.json());
app.use(express.urlencoded());

app.use(upload());


//end point(get and post req)
app.get('/', (req, res)=>{
    res.render('index');
})


app.post('/',[
    check('username')
    .not().isEmpty().withMessage('name can not be empty')
    .isAlpha().withMessage('name can not contain numbers'),


    check('phone')
    .not().isEmpty().withMessage('phone number can not be empty')
    .isLength({min:10}).withMessage('phone number should be in 10 digits')
    .matches(/[1-9]{1}[0-9]{9}/).withMessage('number can not start with zero'),

    check('email')
    .not().isEmpty().withMessage('email can not be empty')
    .isEmail().withMessage('please enter valid email address'),

    check('dob')
    .not().isEmpty().withMessage('date can not be empty'),

    check('pass')
    .not().isEmpty().withMessage('password can not be empty')
    .isLength({min:6}).withMessage('lenth of password should be 6 character'),

    check('cpass')
    .not().isEmpty().withMessage('Confirm password can not be empty')
    .custom((value, {req})=>{
        if(value!==req.body.pass)
        {
            throw new Error('Confirm password does not match with password');
        }
        return true;
    }).withMessage('Confirm password does not match'),

    check('address')
    .not().isEmpty().withMessage('address can not be empty')



],
(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
        const alert = errors.array()
        res.render('index', {
            alert
        })
    }else{
        // console.log(req.files.mFile);
		var file=req.files.mFile;
		var filename=file.name;
		console.log(filename);  

        
		file.mv('./uploads/'+ filename,function(err){
			if(err){
                console.log(err);
				// res.render(err);
			}else{
				// res.send('File Uploaded');
				console.log("File Uploaded")
			}
		});
    }
    res.render('index');
    console.log(req.body);
})


app.listen(port,()=>{
    console.info(`App listening on port: ${port}`);
})