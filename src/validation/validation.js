const ResponseError = require("../error/response-error");

const validate = (schema, request) => {
    const { error, value } = schema.validate(request);

    if (error) {
        throw new ResponseError(400, error.message)
    } else {
        return value
    }
}

module.exports = validate