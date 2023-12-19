const bcrypt = require('bcrypt')
const ResponseError = require('../error/response-error')
const { prismaClient } = require('../utils/prisma-client')
const { getUserValidation, createUserValidation, updateUserValidation } = require('../validation/user-validation')
const validate = require('../validation/validation')

const list = async () => {
    const result = await prismaClient.user.findMany({
        include: {
            profile: true,
            role: true
        }
    })

    return result
}

const get = async (id) => {

    id = validate(getUserValidation, id)

    const result = await prismaClient.user.findFirst({
        where: {
            id: id
        },
        select: {
            id: true,
            profile: true,
            role: true
        }
    })

    return result
}

const store = async (request) => {

    request = validate(createUserValidation, request)
    request.password = await bcrypt.hash(request.password, 10);

    const user = await prismaClient.user.findFirst({
        where: {
            id: request.id
        }
    })

    if (user) throw new ResponseError(400, "User already Exist")


    const result = await prismaClient.user.create({
        data: {
            id: request.id,
            password: request.password,
            roleId: request.roleId,
            profile: {
                create: {
                    name: request.name,
                    email: request.email,
                    phone: request.phone,
                    images: request.images.filename
                }
            }
        }
    })

    console.log("result service:", result);

    return result
}

const update = async (request) => {
    console.log('start user service', request);
    request = validate(updateUserValidation, request)

    const user = await prismaClient.user.findFirst({
        where: {
            id: request.id
        },
        include: {
            profile: true
        }
    })

    if (!user) throw new Error("User doesn't Exist")

    request.images = request.images != undefined ? request.images.filename : user.profile.images

    if (!request.password) {
        request.password = user.password
    } else {
        request.password = await bcrypt.hash(request.password, 10)
        console.log('pass', request.password);
    }


    console.log('user service: ', request);

    return prismaClient.user.update({
        data: {
            id: request.id,
            password: request.password,
            roleId: request.roleId,
            profile: {
                update: {
                    name: request.name,
                    email: request.email,
                    phone: request.phone,
                    images: request.images
                }
            }
        },
        where: {
            id: request.id
        },
        select: {
            id: true,
            profile: true,
            role: true
        }
    })
}

const remove = async (id) => {

    id = validate(getUserValidation, id)

    const user = await prismaClient.user.findFirst({
        where: {
            id: id
        }
    })

    if (!user) throw new Error("User Not Found")

    return prismaClient.user.deleteMany({
        where: {
            id: id
        }
    })
}

module.exports = { list, get, store, update, remove }