const peminjamanService = require('../../service/peminjaman-service')

const index = async (req, res, next) => {
    try {
        const peminjamans = await peminjamanService.list()
        
        res.render('pages/rental/index', {
            peminjamans, active: 'peminjaman',
            message: req.flash('message')
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const { status } = req.body
        const result = await peminjamanService.update(status, id)

        req.flash('message', `${result.status} peminjaman #${result.id}`)
        res.redirect("/admin/peminjaman")
    } catch (error) {
        next(error)
    }
}

module.exports = { index, update }