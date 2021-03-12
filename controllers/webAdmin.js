const WebAdmin = require ('../models/webAdmin');

exports.signUp = (req, res, next) => {
    //SignUp    
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const image = req.body.image;
    const city = req.body.city;
    const country = req.body.country;
    const status = req.body.status;


    const password = req.body.password;
    bcrypt.hash(password, 12)
        .then(hashedPw => {
            const webAdmin = new WebAdmin({
                name: name,
                email: email,
                phone: contact,
                password: hashedPw,
                image: image,
                status: status,
                city: city,
                country: country,
            });
            return webAdmin.save();
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
    //Login
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    WebAdmin.findAll({ where: { email: email } })
        .then(clients => {
            const client = clients[0];
            loadedUser = clients[0];
            return bcrypt.compare(password, client.password);
        }).then(isEqual => {
            if (isEqual) {
                const token = jwt.sign({
                    id: loadedUser.id.toString(),
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


exports.add = (req, res, next) => {
    const webAdmin = new WebAdmin({
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
    webAdmin.save()
        .then(result => {
            res.status(200).json({
                message: "Added Sucessfully",
            });
        }).catch(err => {
            console.log(err);
        });
}
exports.update = (req, res, next) => {
    const email = req.body.email;
    WebAdmin.findAll({ where: { email: email } })
        .then(results => {
            const result = results[0];
            result.name = req.body.name;
            result.email = req.body.email;
            result.phone = req.body.phone;
            result.password = req.body.password;
            result.image = req.body.image;
            result.subscription = req.body.subscription;
            result.expiry = req.body.expiry;
            result.status = req.body.status;
            return result.save();
        })
        .then(result => {
            res.json({
                message: "Updated Client Sucessfully",
            });
        })
        .catch(err => {
            console.log(err);
        });
}
exports.delete = (req, res, next) => {
    const email = req.body.email;
    WebAdmin.findAll({ where: { email: email } })
        .then(results => {
            const result = results[0];
            return result.destroy();
        })
        .then(result => {
            res.json({
                message: "Deleted Client Sucessfully",
            });
        })
        .catch(err => {
            console.log(err);
        });
}
exports.getByEmail = (req, res, next) => {
    const email = req.body.email;
    WebAdmin.findAll({ where: { email: email } })
        .then(results => {
            const result = results[0];
            res.json({
                name: result.name,
                email: result.email,
                phone: result.phone,
                password: result.password,
                image: result.image,
                subscription: result.subscription,
                expiry: result.expiry,
                status: result.status,
            });
        })
        .catch(err => {
            console.log(err);
        });
}
exports.getAll = (req, res, next) => {
    WebAdmin.findAll()
        .then(results => {
            let temp = {};
            let i = 0;
            results.forEach(result => {
                temp[i] = {
                    name: result.name,
                    email: result.email,
                    phone: result.phone,
                    password: result.password,
                    image: result.image,
                    subscription: result.subscription,
                    expiry: result.expiry,
                    status: result.status,
                };
                i++;
            });
            res.json(temp);
        })
        .catch(err => {
            console.log(err);
        });
}