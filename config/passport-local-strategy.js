const passport= require('passport');

const LocalStrategy=require('passport-local').Strategy;

const User= require('../models/user');
 //authenthicate using passport 
passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){
    //find a user and establish a identity
    User.findOne({email:email},function(err,user){

        if(err){
            console.log('error in finding user -->  passport');
            return done(err);
        }

        if(!user|| user.password!=password){
            console.log("wrong user name/ password");
            return done(null,false);
        }
        return done(null,user);
    });
    
}));


//serialiszing the user
passport.serializeUser(function(user,done){

    done(null,user.id);
});

//deserilasize
passport.deserializeUser(function(id,done){

    User.findById(id,function(err,user){
        if(err){
            console.log("error in finding the user --> passport");
            return done(err);
        }
        return done(null,user);
    })
});

//check if the user is autheticate or not

passport.checkAuthentication=function(req,res,next){    
    //if the user is signed in , then pass on the request to the next function(controller's action)                                             
    if(req.isAuthenticated()){
        return next();
    }
    //if the user is not signed in
    return res.redirect('/users/sign-in');
}


passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user=req.user;
    }
    next();
}



module.exports=passport;