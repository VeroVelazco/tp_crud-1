const {loadUsers, storeUsers} = require('../data/db_module');

module.exports = {

    register: (req, res) => {
        return res.render ('register')
    },
    processRegister: (req, res) => {
        const {first_name, last_name, dni, direction, heigth} = req.body;
        const users = loadUsers();
    
        const newUser = {
                id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
                first_name : first_name.trim(),
                last_name : last_name.trim(),
                dni : +dni,
                direction : direction.trim(),
                heigth: +heigth
            }
    
           const usersModify = [...users, newUser];
    
           storeUsers(usersModify);
           return res.redirect('/')
       
        
        
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