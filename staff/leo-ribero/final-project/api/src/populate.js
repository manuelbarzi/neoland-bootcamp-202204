const { connect, disconnect } = require('mongoose')
const { User, Spot, Reaction, Comment } = require('./models')

    ; (async () => {
        try {
            await connect('mongodb://localhost:27017/spots-db')

            await Promise.all([User.deleteMany(), Spot.deleteMany()])

            const pepito = new User({ name: 'Pepito Grillo', username: 'pepigri', password: '123123123' })
            const wendy = new User({ name: 'Wendy Bread', username: 'wendy', password: '123123123' })

            await Promise.all([pepito.save(), wendy.save()])

            const spot = new Spot({ user: pepito.id, text: 'hola mundo' })

            await spot.save()

            {
                const reaction = new Reaction({ user: wendy.id, type: Reaction.LOVE })

                spot.reactions.push(reaction)

                await spot.save()
            }

            const comment = new Comment({ user: wendy.id, text: 'se escribe "Hola, Mundo!", amigo' })

            spot.comments.push(comment) // WARN when pushing an item into an array mongoose does copy the sub-doc into a new object (it does not link / reference it) [1]
            // spot.comments[0] = comment // WARN same here (as [1])

            await spot.save()

            {
                const reaction = new Reaction({ user: pepito.id, type: Reaction.ANGRY })

                // comment.reactions.push(reaction) // WARN!!! it does not work because of [1]
                // spot.markModified('comments') // this doesn't have any effect to solve [1]

                spot.comments[0].reactions.push(reaction) // THIS works, accessing the comment through the object-graph starting from the root document

                await spot.save()
            }

            await disconnect()
        } catch (error) {
            console.error(error)
        }
    })()