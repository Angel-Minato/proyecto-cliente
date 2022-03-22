const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require('../validation/usarValidator');
const jwtToken = require('../validation/jwrValidation');

router.get('/user',jwtToken.validateToken, userValidator.id, usersController.getUser);
router.get('/user', usersController.getUser);
router.get('/users',jwtToken.validateToken, userValidator.id, usersController.getUsers);
router.post('/user', userValidator.add, usersController.postUser);
router.post('/login',usersController.getLogin);
router.put('/user', usersController.putUser);
router.delete('/user', usersController.deleteUser);

module.exports = router;