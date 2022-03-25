const User = require('../models/user');
module.exports.profile = function (req, res) {

    return res.render('profile', {
        title: "user"
    });
}

//sign up
module.exports.signup = function (req, res) {
    return res.render('user_sign-up', {
        title: "Sign up"
    });
}
//sign in
module.exports.signin = function (req, res) {
    return res.render('user_sign-in', {

        title: "Sign in"
    });
}
//create user
module.exports.create = function (req, res) {

    if (req.body.password != req.body.confirm_password) {
        console.log("password not match");

        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log('error in finding user in signing up');
            return;
        }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }
        else {
            return res.redirect('back');
        }
    });

}





module.exports.createSession = function (req, res) {


}