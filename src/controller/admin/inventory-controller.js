const index = (req, res, next) => {
    try {
        res.render('pages/inventory/index')
    } catch (error) {
        next(error)
    }
}

const create = (req, res, next) => {
    try {
        res.render('pages/inventory/create')
    } catch (error) {
        next(error)
    }
}

const edit = (req, res, next) => {
    try {
        res.render('pages/inventory/edit')
    } catch (error) {
        next(error)
    }
}

module.exports = { index, create, edit }