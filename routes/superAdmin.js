const express = require("express");
const router = express.Router();
const superAdminController = require("../controllers/superAdmin");

router.post('/auth/signUp',superAdminController.signUp);
router.post('/auth/login', superAdminController.login);

router.post('/add',superAdminController.add);//wrt to Email thats why post
router.post('/update', superAdminController.update);
router.post('/delete', superAdminController.delete);
router.post('/getByEmail', superAdminController.getByEmail);
router.get('/getAll', superAdminController.getAll);

module.exports = router;