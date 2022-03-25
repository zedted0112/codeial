// require express
const express= require('express');
// call router
const router= express.Router();


// home conntroller
const homecontroller= require('../controllers/home_controllers');

console.log("router is loaded")
// handles all the request for home
router.get('/',homecontroller.home);


//handles request users
router.use('/users', require('./users'));

// futher router use
//router.use('/router name, require('/routerfile))


// export
module.exports=router;