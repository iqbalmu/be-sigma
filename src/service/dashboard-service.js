const { prismaClient } = require("../utils/prisma-client")

const index = async () => {
    const inventory = await prismaClient.inventory.count({
        where: {
            category: 'inventory'
        }
    })

    const facility = await prismaClient.inventory.count({
        where: {
            category: 'facility'
        }
    })

    const peminjaman = await prismaClient.peminjaman.count({})

    const user = await prismaClient.user.count({})

    return { inventory, facility, peminjaman, user }
}

module.exports = { index }