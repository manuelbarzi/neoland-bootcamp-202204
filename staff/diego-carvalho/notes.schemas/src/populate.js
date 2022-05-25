const { connect, disconnect } = require('mongoose')
const { User, Note } = require('./models');

(async () => {
    try {
        await connect('mongodb://127.0.0.1:27017/notes-db')

        const user = new User({ name: 'Pepito Grillo', username: 'pepigri', password: '123123123' })

        await user.save()

        const note = new Note({ user: user.id, text: 'hola mundo' })

        await note.save()

        await disconnect()
    } catch (error) {
        console.error(error)
    }
})()