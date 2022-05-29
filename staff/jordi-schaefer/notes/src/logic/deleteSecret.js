const { Secret, Note } = require ('../models')
const { NotFoundError, ConflictError } = require ('../errors')


function deleteSecret(userId, note, secret) {


    return Secret.findById(secret)    
        .then((secret) => {
            if(!secret) throw new NotFoundError(`secret with id ${secret} does not exist`)

            if (secret.user.toString() !== userId) throw new ConflictError(`secret with id ${secret} does not belong to user with id ${userId}`)


            return Note.updateOne({_id: note}, { $pull: { secret: {_id: secret}}})
        })
        .then((result) => {
            if(result.modifiedCount !== 1) throw new Error ('error deleting the secret, secret was not deleted')

            return Secret.deleteOne({ _id: secret, user: userId })     
        })
        .then((result) => { 
            if(result.deletedCount !== 1) throw new Error ('Error, secret pushed but not deleted')
         })     
}


module.exports = deleteSecret