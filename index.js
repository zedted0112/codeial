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

//express session
const session= require('express-session');
const passport=require('passport');
const passportLocal= require('./config/passport-local-strategy');
const MongoStore= require('connect-mongo');




//url encoded
app.use(express.urlencoded());
app.use(express.static('assests'));

//use cookie parser
app.use(cookieParser());

//layouts
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// set  view engine
app.set('view engine','ejs');
app.set('views', './views');

// moango strore is  used to store session cookie
//use express sessions
app.use(session({
   name:'codeial',
   //will change in deployemet
   secret:'blahsomething',
   saveUninitialized:false,
   resave:false,
   cookie:{
       maxAge:(1000*60*100)
   },
   store: MongoStore.create({ mongoUrl: 'mongodb://localhost/codeial_development',
autoRemove:'disabled' }
   ,function(err){
       if(err){
           console.log(err||" store in mongo store");
       }
   })
  


}));

//use passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// use express router
app.use('/',require('./routes/index'));


//listen
app.listen(port,function(err){

    if(err){
        console.log(`error:${err}`);
        return;
    }
    console.log(`running on port:${port} `);
})



