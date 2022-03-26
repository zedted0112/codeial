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

module.exports=passport;