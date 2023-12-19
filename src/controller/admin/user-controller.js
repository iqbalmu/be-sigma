const userService = require('../../service/user-service')

const index = async (req, res, next) => {
    try {
        const result = await userService.list()
        
        res.render('pages/user/index', {
            users: result,
            active: 'manage',
            message: req.flash('message')
        })
    } catch (error) {
        req.flash('message', error.message)
        res.redirect("/admin/users")
    }
}

const create = (req, res, next) => {
    try {
        res.render('pages/user/create', {
            active: 'manage',
            message: req.flash('message')
        })
    } catch (error) {
        req.flash('message', error.message)
        res.redirect("/admin/users")
    }
}

const edit = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await userService.get(id)
        
        res.render('pages/user/edit', {
            user: result,
            active: 'manage',
            message: req.flash('message')
        })
    } catch (error) {
        req.flash('message', error.message)
        res.redirect('/admin/users')
    }
}

const store = async (req, res, next) => {
    try {
        const request = req.body
        request.images = req.file
        await userService.store(request)

        req.flash('message', "successfully created data")
        res.redirect("/admin/users")
    } catch (error) {
        req.flash('message', error.message)
        res.redirect("/admin/users/create")
    }
}

const update = async (req, res, next) => {
    try {
        const request = req.body
        request.images = req.file
        await userService.update(request)        

        req.flash('message', "successfully updated data")
        res.redirect("/admin/users")
    } catch (error) {
        req.flash('message', error.message)
        res.redirect(`/admin/users/${req.body.id}`)
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        await userService.remove(id)

        req.flash('message', "successfully deleted data")
        res.redirect("/admin/users")
    } catch (error) {
        req.flash('message', error.message)
        res.redirect(`/admin/users/${req.params.id}`)
    }
}

module.exports = { index, create, edit, store, update, remove }