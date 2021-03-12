const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const WebAdmin = sequelize.define('webAdmin', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    image: Sequelize.STRING,    
    status: Sequelize.STRING,    
    city: Sequelize.STRING,    
    Country: Sequelize.STRING,    
});

module.exports = WebAdmin;
