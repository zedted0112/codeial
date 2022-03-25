module.exports.profile=function(req,res){

 return res.render('user',{
     user:"user"
 });
}
module.exports.signup=function(req,res){
return res.render('user_signup',{
    title:"Signup"
});
}

module.exports.signin=function(req,res){
    return res.render('user_signin',{

title:"Signin"
    });
}