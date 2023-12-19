const authService = require('../service/auth-service')

const login = async (req, res, next) => {
    try {
        const token = await authService.loginUser(req.body)
        res.status(200).json({ token });
    } catch (error) {
        next(error)
    }
}

const logout = async (req, res, next) => {
    try {
        const expiredToken = await authService.logoutUser(req.user)
        res.status(200).json({ message: "Logout successful", token: expiredToken });
    } catch (error) {
        next(error)
    }
}

module.exports = { login, logout }