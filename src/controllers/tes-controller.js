const tes = (req, res, next) => {
    try {
        res.render('tes', { tes: 'this tes page' })
    } catch (error) {
        next(error)
    }
}

module.exports = { tes }