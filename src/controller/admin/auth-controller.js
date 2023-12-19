const authService = require('../../service/auth-service')

const login = (req, res, next) => {
    res.render('pages/auth/login', { message: req.flash('message') })
}

const authenticate = async (req, res, next) => {
    try {
        const request = req.body
        const user = await authService.authenticate(request)
        req.session.user = user;
        res.redirect('/admin/dashboard')
    } catch (error) {
        req.flash('message', error.message)
        res.redirect("/admin/login")
    }
}

const logout = async (req, res, next) => {
    try {
        req.session.user = null;
        res.redirect("/admin/login");
    } catch (error) {                
        res.redirect("/admin/dashboard");
    }
}

module.exports = { login, authenticate, logout }