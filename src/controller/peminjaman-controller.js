const peminjamanService = require('../service/peminjaman-service')

const history = async (req, res, next) => {
    try {
        const userId = req.user.id
        const result = await peminjamanService.getByUser(userId)
        console.log(result);
        res.status(200).json({
            message: "List user by user id",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { history }