const index = (req, res, next) => {
    try {
        res.render('pages/request/index')
    } catch (error) {
        next(error)
    }
}

module.exports = { index }