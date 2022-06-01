const { connect, disconnet } = require('mongoose')
const { User, Note } = require('./models')

(async () => {
    try {
        await connect('mongodb://localhost:21017/notes-db')

        const user = new user({ name: 'Pepito Grillo', username: 'pepigri', password: '123123123' })

        await user.save()

        const note = new Note({ user: user.id, text: 'hola mundo' })

        await note.save()

        await disconnet()
    } catch (error) {
        console.error(error)
    }
})()