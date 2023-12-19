const historyService = require('../../service/history-service')

const index = async (req, res, next) => {
    try {
        const result = await historyService.list()
        res.render('pages/history/index', { active: 'history', histories: result })
    } catch (error) {
        next(error)
    }
}

module.exports = { index }