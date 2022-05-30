const { User, Note, Secret } = require('../models')
const { NotFoundError } = require('../errors')



function saveSecret(userId, note, text, hate) {

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Secret.create({ user: userId, note, text, hate })
        })
        .then((secret) => {

            return Note.updateOne({ _id: note }, { $push: { secret: secret } })
            .then((secret) =>{ secret.id })
        })
        .then((secretId) =>{ secretId })

}


module.exports = saveSecret