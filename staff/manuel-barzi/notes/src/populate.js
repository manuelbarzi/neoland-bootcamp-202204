const { connect, disconnect } = require('mongoose')
const { User, Note, Reaction, Comment } = require('./models')

    ; (async () => {
        try {
            await connect('mongodb://localhost:27017/notes-db')

            await Promise.all([User.deleteMany(), Note.deleteMany()])

            const pepito = new User({ name: 'Pepito Grillo', username: 'pepigri', password: '123123123' })
            const wendy = new User({ name: 'Wendy Bread', username: 'wendy', password: '123123123' })

            await Promise.all([pepito.save(), wendy.save()])

            const note = new Note({ user: pepito.id, text: 'hola mundo' })

            await note.save()

            const reaction = new Reaction({ user: wendy.id, type: Reaction.LOVE })

            note.reactions.push(reaction)

            await note.save()

            const comment = new Comment({ user: wendy.id, text: 'se escribe "Hola, Mundo!", amigo' })

            note.comments.push(comment)

            // await note.save()

            const reaction2 = new Reaction({ user: pepito.id, type: Reaction.ANGRY })

            // const _note = await Note.findById(note.id)

            // const _comment = _note.comments[0]

            comment.reactions.push(reaction2)

            await note.save()

            await disconnect()
        } catch (error) {
            console.error(error)
        }
    })()