const { connect, disconnect } = require('mongoose')
const { User, Apartment, Reaction, Comment } = require('./models')

    ; (async () => {
        try {
            await connect('mongodb://localhost:27017/apartments-db')

            await Promise.all([User.deleteMany()/*, Apartment.deleteMany()*/])

            const admin = new User({ name: 'Admin', username: 'admin', password: '123123123' })
            const admin2 = new User({ name: 'Admin 2', username: 'admin2', password: '123123123' })

            await Promise.all([admin.save(), admin2.save()])

            const apartment = new Apartment({ 
                user: admin.id, 
                title: 'Título del apartamento', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                email: 'admin@flats.com',
                phone: '+34 654 987 321',
                type: 0
            })

            await apartment.save()

            // {
            //     const reaction = new Reaction({ user: wendy.id, type: Reaction.LOVE })

            //     apartment.reactions.push(reaction)

            //     await apartment.save()
            // }

            // const comment = new Comment({ user: admin.id, text: 'esto es un comentario para una review de un apartamento' })

            // note.comments.push(comment) // ---- WARN when pushing an item into an array mongoose does copy the sub-doc into a new object (it does not link / reference it) [1]
            
            // ---- note.comments[0] = comment // WARN same here (as [1])

            // await note.save()

            // {
            //     const reaction = new Reaction({ user: pepito.id, type: Reaction.ANGRY })

            //     // ---- comment.reactions.push(reaction) // WARN!!! it does not work because of [1] ----
            //     // ---- note.markModified('comments') // this doesn't have any effect to solve [1] ----

            //     note.comments[0].reactions.push(reaction) // ---- THIS works, accessing the comment through the object-graph starting from the root document

            //     await note.save()
            // }

            await disconnect()
        } catch (error) {
            console.error(error)
        }
    })()