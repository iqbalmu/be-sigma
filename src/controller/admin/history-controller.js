const index = (req, res, next) => {
    try {
        res.render('pages/history/index')
    } catch (error) {
        next(error)
    }
}

module.exports = { index }