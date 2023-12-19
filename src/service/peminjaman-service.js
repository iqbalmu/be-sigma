const ResponseError = require("../error/response-error")
const { prismaClient } = require("../utils/prisma-client")
const { bookInventoryValidation } = require('../validation/peminjaman-validation')
const validate = require("../validation/validation")

const book = async (request, id) => {
    id = parseInt(id)
    request = validate(bookInventoryValidation, request)

    const inventory = await prismaClient.inventory.findFirst({
        where: {
            id: id
        }
    })

    if (inventory.stock != 'inStock') throw new ResponseError(400, "Data Not Available")

    const result = await prismaClient.peminjaman.create({
        data: {
            startDate: request.startDate,
            endDate: request.endDate,
            description: request.description,
            userId: request.userId,
            inventoryId: id
        }
    })

    return result
}

const list = () => {
    return prismaClient.peminjaman.findMany({
        include: {
            user: {
                include: {
                    profile: true
                },
            },
            inventory: true
        }
    })
}

const getByUser = (userId) => {
    userId = parseInt(userId)

    return prismaClient.peminjaman.findMany({
        select: {
            id: true,
            startDate: true,
            endDate: true,
            description: true,
            status: true,
            inventory: true
        },
        where: {
            userId: userId
        }
    })
}

const update = async (status, id) => {
    id = parseInt(id)

    return prismaClient.$transaction(async tx => {
        const peminjaman = await prismaClient.peminjaman.update({
            where:{
                id: id
            },
            data: {
                status: status
            }
        })

        await prismaClient.history.create({
            data: {
                peminjamanId: peminjaman.id,
                inventoryId: peminjaman.inventoryId,
                userId: peminjaman.userId,
                status: status,
                startDate: peminjaman.startDate,                
                endDate: peminjaman.endDate,                
            }
        })

        return prismaClient.peminjaman.delete({
            where: {
                id: peminjaman.id
            }
        })
    })
}

module.exports = { book, list, getByUser, update }