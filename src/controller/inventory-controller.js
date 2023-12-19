const inventoryService = require('../service/inventory-service')
const peminjamanService = require('../service/peminjaman-service')

const index = async (req, res, next) => {
    try {
        const result = await inventoryService.list()
        console.log(req.user);
        res.json({
            status: 200,
            message: "List Data Inventories",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await inventoryService.get(id)
        res.json({
            status: 200,
            message: "Detail Inventory",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const book = async (req, res, next) => {
    try {
        const { id } = req.params
        const request = req.body
        request.userId = req.user.id
        const result = await peminjamanService.book(request, id)
        res.json({
            status: 200,
            message: "Book Succes",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { index, get, book }