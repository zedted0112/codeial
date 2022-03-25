//require express
const express= require('express');
//require cooke parser
const cookieParser= require('cookie-parser');
//run express
const app= express();
// port
const port=8000;
const db = require('./config/mongoose');
const expressLayouts= require('express-ejs-layouts');



//url encoded
app.use(express.urlencoded());
app.use(express.static('assests'));

//use cookie parser
app.use(cookieParser());

//layouts
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router
app.use('/',require('./routes/index'));

// set  view engine
app.set('view engine','ejs');
app.set('views', './views');

//listen
app.listen(port,function(err){

    if(err){
        console.log(`error:${err}`);
        return;
    }
    console.log(`running on port:${port} `);
})



