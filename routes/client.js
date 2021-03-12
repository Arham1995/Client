const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client");

router.post('/auth/signUp',clientController.signUp);
router.post('/auth/login', clientController.login);

router.post('/add',clientController.add);//wrt to Email thats why post
router.post('/update', clientController.update);
router.post('/delete', clientController.delete);
router.post('/getByEmail', clientController.getByEmail);
router.get('/getAll', clientController.getAll);

module.exports = router;