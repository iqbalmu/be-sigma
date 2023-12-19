const ResponseError = require("../error/response-error")

const errorMiddleware = (err, req, res, next) => {

    if (!err) next()

    if (err instanceof ResponseError) {
        res.status(err.status).json({
            status: err.status,
            message: err.message
        })
        res.end()
    } else {
        res.json({
            status: 400,
            message: err.message
        })
        res.end()
    }
}

module.exports = errorMiddleware 