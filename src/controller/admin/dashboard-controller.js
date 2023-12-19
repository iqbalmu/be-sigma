const dashboardService = require('../../service/dashboard-service')

const index = async (req, res, next) => {
    try {
        const data = await dashboardService.index()
        res.render('pages/dashboard/index', {
            active: 'dashboard',
            data
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { index }