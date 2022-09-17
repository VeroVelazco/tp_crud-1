const express = require('express');
const router = express.Router();

const {login,profile,register, update, processRegister, processLogin} = require('../controllers/usersController')
const registerValidator = require ('../validations/registerValidator');
const loginValidator = require ('../validations/loginValidator');

router
    .get('/register', register ) 
    .post('/register', registerValidator ,processRegister ) 
    .put('/update/:id', update)//  http://user/register
    .get('/login', login)   
    .post('/login', loginValidator , processLogin) 
    .get('/profile',profile)  //  http://user/login


module.exports = router;