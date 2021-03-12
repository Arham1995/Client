const client = require ('../models/client');

exports.signUp = (req, res, next) => {
    //SignUp
    console.log(req.body);
    res.json({
        "message": "SignUp Successfull",
    });
}

exports.login = (req, res, next) => {
    //Login
    console.log(req.body);
    res.json({
        "message": "Login Successfull",
    });
}