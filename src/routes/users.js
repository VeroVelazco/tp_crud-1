const express = require('express');
const router = express.Router();

const {login,profile,register, update, processRegister} = require('../controllers/usersController')
const registerValidator = require ('../validations/registerValidator');

router
    .get('/register', register ) 
    .post('/register', registerValidator ,processRegister ) 
    .put('/update/:id', update)//  http://user/register
    .get('/login', login)    
    .get('/profile',profile)  //  http://user/login


module.exports = router;