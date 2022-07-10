const { connect, disconnet } = require('mongoose')
const { User, Note, Reaction, Comment } = require('./models')

; (async () => {
    try {
        await connect('mongodb://localhost:21017/notes-db')

        await Promise.all([User.deleteMany(), Note.deleteMany()])

        const peppa = new user({ name: 'Peppa Pig', username: 'peppa', password: '01020304' })
        const george = new User({ name: 'George Pig', username: 'gerorge', password: '01020304'})

        await promise.all([peppa.save(), george.save()])

        const note = new Note({ user: peppa.id, text: 'Me gusta saltar en los charcos de lodo' })

        await note.save()

        {
            const reaction = new Reaction({ user: george.id, type: Reaction.LOVE })

            note.reaction.push(reaction)

            await note.save()
        }

        const comment = new Comment({ user: george.id, text: 'ella es mi hermana mayor' })

        note.comments.push(comment)

        await note.save()

        {
            const reaction = new Reaction({ user: peppa.id, type: Reaction.ANGRY })

            note.comments[0].reactions.push(reaction)

            await note.save()
        }

        await disconnet()
    } catch (error) {
        console.error(error)
    }
})()