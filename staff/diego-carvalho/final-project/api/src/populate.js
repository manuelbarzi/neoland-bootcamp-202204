// const { connect, disconnect } = require('mongoose')
// const { User, Event, Category, Participant } = require('./models')
// debugger
//     ; (async () => {
//         try {
//             await connect('mongodb://127.0.0.1:27017/notes-db')//coneccíon a la db de mongo

//             await Promise.all([User.deleteMany(), Event.deleteMany()])//promise delete todo

//             //creo dos usuários 
//             const pepito = new User({ name: 'Pepito Grillo', username: 'pepigri', password: '123123123' })
//             const wendy = new User({ name: 'Wendy Bread', username: 'wendy', password: '123123123' })

//             await Promise.all([pepito.save(), wendy.save()])//salvo los dos

//             const event = new Event({ user: pepito.id, title: 'hola mundo', description:'bora surfaaaaar' })//creo una nueva nota

//             await event.save()//la salvo

//             {
//                 const category = new Category({ user: wendy.id, type: Category.actividadesDeportivas })//creo una nueva reacción 

//                 event.category.push(category)//la añado en la nota

//                 await event.save()//salvo la nota
//             }

//             const participant = new Participant({ user: wendy.id, email: 'wendy@gmail.com' })//creo un comentário (para la nota)

//             //añado el comentário en la nota
//             event.participant.push(participant) // WARN when pushing an item into an array mongoose does copy the sub-doc into a new object (it does not link / reference it) [1]
//             // note.comments[0] = comment // WARN same here (as [1])

//             await event.save()//salvo la nota

//             await disconnect()
//         } catch (error) {
//             console.error(error)
//         }
//     })()