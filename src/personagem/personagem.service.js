const { getDatabase } = require("../db/database-conection")

function getCollection(){
    return getDatabase().collection('personagem')
}

function readAll() {
    // Acessamos a lista de itens na collection do MongoDB
    return getCollection().find().toArray()
}

function readById() {
}

function create() {
}

function updateById() {
}

function deleteById() {
}

module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}
