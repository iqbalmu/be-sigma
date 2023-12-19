const inventoryService = require('../../service/inventory-service')

const index = async (req, res, next) => {
    try {
        const result = await inventoryService.list()

        res.render('pages/inventory/index', {
            inventories: result,
            active: 'manage',
            message: req.flash('message')
        })
    } catch (error) {
        req.flash('message', error.message)
        res.redirect("/admin/inventories")
    }
}

const create = (req, res, next) => {
    try {
        res.render('pages/inventory/create', {
            active: 'manage',
            message: req.flash('message')
        })
    } catch (error) {
        req.flash('message', error.message)
        res.redirect("/admin/inventories")
    }
}

const edit = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await inventoryService.get(id)

        res.render('pages/inventory/edit', {
            inventory: result,
            active: 'manage',
            message: req.flash('message')
        })
    } catch (error) {
        req.flash('message', error.message)
        res.redirect("/admin/inventories")
    }
}

const store = async (req, res, next) => {
    try {
        const request = req.body
        request.images = req.file
        await inventoryService.store(request)

        req.flash('message', "successfully created data")
        res.redirect("/admin/inventories")
    } catch (error) {
        req.flash('message', error.message)
        res.redirect("/admin/inventories/create")
    }
}

const update = async (req, res, next) => {
    try {
        const request = req.body
        request.images = req.file

        await inventoryService.update(request)
        req.flash('message', "successfully updated data")
        res.redirect("/admin/inventories")
    } catch (error) {
        req.flash('message', error.message)
        res.redirect(`/admin/inventories/${req.body.id}`)
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        await inventoryService.remove(id)
        
        req.flash('message', "successfully deleted data")
        res.redirect("/admin/inventories")
    } catch (error) {
        req.flash('message', error.message)
        res.redirect(`/admin/inventories/${req.body.id}`)
    }
}

module.exports = { index, create, edit, store, update, remove }