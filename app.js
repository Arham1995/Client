const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authRoutes = require('./routes/auth');
const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// const fs = require('fs');
// fs.writeFileSync("hello.txt","Hello Node js");


app.use("/auth", authRoutes);

sequelize.sync()
    .then(res => {
        console.log(res);
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    });

