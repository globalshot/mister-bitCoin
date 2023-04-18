
// function getUser() {
//     return {
//         name: "Ochoa Hyde",
//         coins: 100,
//         moves: []
//     }
// }

// function signup(name) {
//     return new Promise((resolve, reject) => {
//         contact._id = _makeId()
//         contacts.push(contact)
//         resolve(contact)
//     })
// }
export const userService = {
    getUsers,
    getUserById,
    signup,
    updateUser,
    removeUser,
    getLoggedUser,
}

const USER = 'userdb'
const LOGGEDIN = 'loggedInId'

var gUser = {}
var loggedIn = _loggedUser() || { name: 'guest' }
function getLoggedUser() {
    return loggedIn
}

async function _loggedUser() {//f broken, im done
    try {
        var entities = await JSON.parse(localStorage.getItem(USER)) || []
        return entities
    }
    catch (err) {
        console.log('err', err);
    }
}

async function getUsers(entityType) {//f broken, im done
    if (gUser) return gUser
    try {

        var gUser = await JSON.parse(localStorage.getItem(entityType)) || []
        return gUser
    }
    catch (err) {
        console.log('err', err);
    }
}

function getUserById(entityType, entityId) {
    return getUsers(entityType).then(entities => {
        const entity = entities.find(entity => entity.id === entityId)
        if (!entity) throw new Error(`Unknown Entity ${entityId}`)
        return entity
    })
}

function signup(name) {
    let newUser = {
        id: _makeId(),
        name: name,
        coins: 100,
        moves: []
    }
    return getUsers(USER).then(entities => {
        entities.push(newUser)
        _save(USER, entities)
        return newUser
    })
}

function updateUser(entityType, updatedEntity) {
    return getUsers(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity.id === updatedEntity.id)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function removeUser(entityType, entityId) {
    return getUsers(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity.id === entityId)
        if (idx < 0) throw new Error(`Unknown Entity ${entityId}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}