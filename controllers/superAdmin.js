const SuperAdmin = require ('../models/superAdmin');

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
            const superAdmin = new SuperAdmin({
                name: name,
                email: email,
                phone: contact,
                password: hashedPw,
                image: image,
                status: status,
                city: city,
                country: country,
            });
            return superAdmin.save();
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

    SuperAdmin.findAll({ where: { email: email } })
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
    
}
exports.update = (req, res, next) => {
    
}
exports.delete = (req, res, next) => {
    
}
exports.getByEmail = (req, res, next) => {
    
}
exports.getAll = (req, res, next) => {
    
}