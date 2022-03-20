// require express
const express= require('express');
// call router
const router= express.Router();


// home conntroller
const homecontroller= require('../controllers/home_controllers');

console.log("router is loaded")
router.get('/',homecontroller.home);

// export
module.exports=router;