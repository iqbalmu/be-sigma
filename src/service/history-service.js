const { prismaClient } = require("../utils/prisma-client")

const list = async () => {
    return prismaClient.history.findMany({
        select:{
            peminjamanId: true,
            startDate: true,
            endDate: true,
            status: true,
            user: {
                include: {
                    profile: true
                }
            },
            inventory: true
        },
        orderBy: {
            id: 'desc'
        }
    })
}

module.exports = { list }