const Client = require('../models/client');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


exports.signUp = (req, res, next) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const image = req.body.image;
    const city = req.body.city;
    const country = req.body.country;
    const subscriptionType = req.body.subscriptionType;
    const expiry = req.body.expiry;
    const status = req.body.status;


    const password = req.body.password;
    bcrypt.hash(password, 12)
        .then(hashedPw => {
            const client = new Client({
                name: name,
                email: email,
                phone: contact,
                password: hashedPw,
                image: image,
                subscription_type: subscriptionType,
                expiry: expiry,
                status: status,
                city: city,
                country: country,
            });
            return client.save();
        }).then(result => {
            console.log(result);
            res.json({
                "message": "SignUp Successfull",
                id: result.id,
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    Client.findAll({ where: { email: email } })
        .then(clients => {
            const client = clients[0];
            loadedUser = clients[0];
            return bcrypt.compare(password, client.password);
        }).then(isEqual => {
            if (isEqual) {
                const token = jwt.sign({
                    id: loadedUser._id.toString(),
                    email: loadedUser.email,
                }, "Hello World",
                    { expiresIn: '1h' });
                res.status(200).json({
                    "token": token,
                    "message": "Login Successfull",
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
}