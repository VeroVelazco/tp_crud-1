const {check, body} = require('express-validator');
const {loadUsers} = require('../data/db_module');
const bcryptjs = require('bcryptjs');


module.exports = [


    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    body('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .custom((value, {req}) => {
            let user = loadUsers().find(user => user.email === req.body.email && bcryptjs.compareSync(value, user.password));
            return user ? true : false
        }).withMessage('Credenciales inválidas'),
]