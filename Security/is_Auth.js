const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'somesupersecretsecret');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }

  var fetchedId = decodedToken.id;
  if (fetchedId == null) {
    next();
    return;
  }

  req.phone = decodedToken.phone;

  User.findByPk(parseInt(fetchedId))
    .then(user => {
      req.user = user;
      next();
    }).catch(err => {
      console.log(err);
    });
};