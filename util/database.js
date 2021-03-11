// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('heroku_cebaceccd37af68', 'b5848d19d88137', '4dd90459', { dialect: 'mysql', host: 'us-cdbr-iron-east-05.cleardb.net', });

// module.exports = sequelize;


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_comparison', 'root', '@qwerty123', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;