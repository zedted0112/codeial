//require express
const express= require('express');
//run express
const app= express();
// port
const port=8000;

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



