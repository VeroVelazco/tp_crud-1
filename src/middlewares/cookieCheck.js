module.exports = (req,res,next) => {
    if(req.cookies.crud_tp){
        req.session.login = req.cookies.crud_tp
    }
    next()
}