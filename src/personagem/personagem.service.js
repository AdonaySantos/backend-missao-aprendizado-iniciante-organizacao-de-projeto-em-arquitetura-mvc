const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-conection')

function getCollection(){
    return getDatabase().collection('personagem')
}

function readAll() {
    // Acessamos a lista de itens na collection do MongoDB
    return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
    // Retornar o item na collection usando o ID
    return getCollection().findOne({ _id: new ObjectId(id) })
}

function create(newItem) {
    // Adicionamos na collection
    return getCollection().insertOne(newItem)
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function updateById(id, newItem) {
    // Atualizamos no collection o novoItem pelo ID
    return getCollection().updateOne(
        { _id: new ObjectId(id) },
        { $set: newItem }
      )
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
