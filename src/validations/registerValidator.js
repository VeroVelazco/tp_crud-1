const {check} = require('express-validator');


module.exports = [
    check('first_name')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('last_name')
        .notEmpty().withMessage('Debes completar el apellido').bail()
        .isLength({ min: 5 }).withMessage('El apellido debe tener al menos 5 caracteres'),
    check('dni')
        .notEmpty().withMessage('Debes completar el dni').bail()
        .isLength({ min: 8 }).withMessage('El dni debe tener al menos 8 caracteres'),
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
    check('direction')
        .notEmpty().withMessage('Debes completar el domicilio').bail()
        .isLength({ min: 3 }).withMessage('La dirección debe tener al menos 5 caracteres'),
    check('heigth')
        .notEmpty().withMessage('Debes completar la altura').bail(),
    check('location')
        .notEmpty().withMessage('Debes elegir una localidad').bail(),
        
]

