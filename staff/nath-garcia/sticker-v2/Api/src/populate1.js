const { connect, disconnect } = require('mongoose')
const { User, Note } = require('./models')

connect('mongodb://localhost:27017/notes-db', error => {
    if (error) return console.error(error)
    return User.deleteMany()  //borra todo lo que tiene en la db
        .then(() => {
            const user = new User({ name: 'Pepito Grillo', username: 'pepigri', password: '123123123' })

            return user.save()
        }) // returns a Promise
        .then(user => {
            const note = new Note({ user: user.id, text: 'hola mundo' })

            return note.save() // Promise
        })
        .then(() => disconnect())
})