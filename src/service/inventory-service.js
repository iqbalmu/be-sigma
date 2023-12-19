const ResponseError = require('../error/response-error')
const { prismaClient } = require('../utils/prisma-client')
const { createInventoryValidation, getInventoryValidation, updateInventoryValidation } = require('../validation/inventory-validation')
const validate = require("../validation/validation")

const list = async () => {
    return prismaClient.inventory.findMany({
        orderBy: {
            id: 'desc'
        }
    })
}

const get = async (id) => {
    id = validate(getInventoryValidation, id)

    const result = await prismaClient.inventory.findFirst({
        where: {
            id: id
        }
    })

    if (!result) throw new ResponseError(404, "Inventory doesnt exist")

    return result
}

const store = async (request) => {

    request = validate(createInventoryValidation, request)
    const { id, name, category, description, images, stock } = request

    const inventory = await prismaClient.inventory.findFirst({
        where: {
            id: id
        }
    })

    if (inventory) throw new ResponseError(400, "Inventory Is Exist")

    const result = await prismaClient.inventory.create({
        data: {
            id: id,
            name: name,
            category: category,
            description: description,
            images: images.filename,
            stock: stock,            
        }
    })

    return result
}

const update = async (request) => {
    
    request = validate(updateInventoryValidation, request)

    const inventory = await prismaClient.inventory.findFirst({
        where: {
            id: request.id
        }
    })    

    if (!inventory) throw new Error("Inventory Not Found")

    request.images = request.images != undefined ? request.images.filename : inventory.images

    console.log(request.images);

    console.log('end update service');

    return prismaClient.inventory.update({
        data: request,
        where: {
            id: request.id
        }
    })
}

const remove = async (id) => {

    id = validate(getInventoryValidation, id)

    const inventory = await prismaClient.inventory.findFirst({
        where: {
            id: id
        }
    })

    if (!inventory) throw new Error("Inventory Not Exist")

    return prismaClient.inventory.delete({
        where: {
            id: id
        }
    })
}

module.exports = { list, get, store, update, remove }
