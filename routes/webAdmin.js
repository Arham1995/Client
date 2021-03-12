const express = require("express");
const router = express.Router();
const webAdminController = require("../controllers/webAdmin");

router.post('/auth/signUp',webAdminController.signUp);
router.post('/auth/login', webAdminController.login);

router.post('/add',webAdminController.add);
router.post('/update', webAdminController.update);
router.post('/delete', webAdminController.delete);
router.post('/getByEmail', webAdminController.getByEmail);
router.post('/getAll', webAdminController.getAll);

module.exports = router;