const tes = (req, res, next) => {
    try {
        res.render('pages/dashboard/index')
    } catch (error) {
        next(error)
    }
}

module.exports = { tes }