const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ResponseError = require('../error/response-error')
const { prismaClient } = require('../utils/prisma-client')
const { authValidation } = require('../validation/auth-validation')
const validate = require('../validation/validation')

// admin
const authenticate = async (request) => {
    request = validate(authValidation, request)

    const user = await prismaClient.user.findUnique({
        where: {
            id: request.id
        },
        select: {
            id: true,
            password: true,
            roleId: true
        },
    });

    if (!user) throw new ResponseError(400, "Username or password is wrong");

    if (user.roleId != 1) throw new ResponseError(302, "Forbidden")

    const validPassword = await bcrypt.compare(request.password, user.password);

    if (!validPassword)
        throw new ResponseError(400, "Username or password is wrong");

    return {
        id: user.id,
        password: user.password
    }

}

// user
const loginUser = async (request) => {
    request = validate(authValidation, request)

    const user = await prismaClient.user.findUnique({
        where: {
            id: request.id
        },
        select: {
            id: true,
            password: true,
            roleId: true,
        },
    });

    if (!user) throw new ResponseError(400, "Username or password is wrong");

    const validPassword = await bcrypt.compare(request.password, user.password);

    if (!validPassword)
        throw new ResponseError(400, "Username or password is wrong");

    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token
}

const logoutUser = (user) => {
    const expiredToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1' });
    return expiredToken
}

module.exports = { authenticate, loginUser, logoutUser }