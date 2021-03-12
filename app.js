const bodyParser = require("body-parser");
const clientRoutes = require('./routes/client');
const webAdminRoutes = require('./routes/webAdmin');
const superAdminRoutes = require('./routes/superAdmin');
const sequelize = require('./util/database');
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// const fs = require('fs');
// fs.writeFileSync("hello.txt","Hello Node js");


app.use("/client", clientRoutes);
app.use("/webAdmin", webAdminRoutes);
app.use("/superAdmin", superAdminRoutes);

sequelize.sync()
    .then(res => {
        console.log(res);
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    });

