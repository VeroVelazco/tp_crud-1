const {loadUsers, storeUsers} = require('../data/db_module');
const { validationResult } = require('express-validator');

module.exports = {

    register: (req, res) => {
        return res.render ('register')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const {first_name, last_name, dni, direction, heigth, email, password} = req.body;
            const users = loadUsers();
            const newUser = {
                id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
                first_name : first_name.trim(),
                last_name : last_name.trim(),
                dni : +dni,
                email: email.trim(),
                password,
                direction : direction.trim(),
                heigth: +heigth,
            }
        
            const usersModify = [...users, newUser];
        
            storeUsers(usersModify);
            return res.redirect('/')
        }else{
            return res.render('register', {
                errors : errors.mapped(),
                old : req.body
            });
        }
        
    },

    login: (req, res) => {
        return res.render('login')
    },
    profile: (req, res) => {
        return res.render('profile')
    },
    update : (req,res) => {
        return res.send(req.file)
    }

}