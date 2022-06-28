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

            { //crea una reacción de wendy a la nota de pepito
                const reaction = new Reaction({ user: wendy.id, type: Reaction.LOVE }) //creo una nueva reacción

                note.reactions.push(reaction) //pongo en la base de datos la reaccion que acabo de crear en las reactions de note.

                await note.save() // guardo la nota

            }
            //creo un comentario de wendy a la nota de pepito
            const comment = new Comment ({ user: wendy.id, text: 'me gustan los macarrones' })

            note.comments.push(comment) //pongo en la base de datos el comentario de wendy en los comentarios de la nota de pepito

            await note.save() //guardo la nota

            //creo una reacción en el comentario de wendy 
            {
                const reaction = new Reaction ({ user: pepito.id, type: Reaction.ANGRY })

                note.comments[0].reactions.push(reaction) //de la nota, en el array de comentarios, en el comentario de la posicion 0, entra en sus reacciones y pon la reacción que acabo de crear

                await note.save() //guarda la nota

            }

        }catch (error) {
            console.error(error)
        }

    })