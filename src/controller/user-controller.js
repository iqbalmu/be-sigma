const userService = require('../service/user-service')

const get = async (req, res, next) => {
    try {
        const { id } = req.user
        const result = await userService.get(id)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const request = req.body
        request.images = req.file
        // console.log("file user profile : ",req);        
        request.id = req.user.id
        console.log("user request: ", request);
        const result = await userService.update(request)
        console.log('result: ', result);
        res.status(200).json({
            message: "Success update profile",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { get, update }