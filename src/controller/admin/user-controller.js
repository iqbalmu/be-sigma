const index = (req, res, next) => {
    try {
        res.render('pages/user/index')
    } catch (error) {
        next(error)
    }
}

module.exports = { index }