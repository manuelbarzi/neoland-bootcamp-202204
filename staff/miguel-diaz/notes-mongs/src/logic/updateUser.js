const {User} = require('../models')

function updateUser(id, newName) {

    return User.updateOne({id: id}, {$set: {name: newName}})
        .then(() => { })
        .catch(error => {
            if(error)
                throw new Error ('user not Found')
            throw error
        })
    
}

module.exports = updateUser


// notes.updateOne({ _id: insertedId}, {$set: { text: 'texto cambiado'}}, (error, result) => {
//     if (error) return console.error(error)