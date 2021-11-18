const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//retrieve all users
router.get('/', userController.findAll);

//create a new user
router.post('/', userController.create);

module.exports = router
