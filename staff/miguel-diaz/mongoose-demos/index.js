const { Schema, model, connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { printObjectGraph } = require('./utils')

const user = new Schema({
    username: String,
    password: String
})

const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },

    text: String,

    date: {
        type: Date, 
        default: Date.now
    },

    likes: [{
        type: ObjectId,
        ref: 'User'
    }]
})

const note = new Schema ({
    user: { 
        type: ObjectId,
        ref: 'User'
    },

    text: String,

    audience: {
        type: String,
        enum: ['private', 'public', 'firends'],
        default: 'private'
    },

    comments:  [comment]

})

const User = model('User', user)
const Note = model('Note', note)
const Comment = model('comment', comment)

    ; (async () => {
        try{
            await connect('mongodb://localhost/mongoose-demo')

            await Promise.all([User.deleteMany(), Note.deleteMany()])

            const john = new User({ username: 'John', password: 'Doe' })
            const maria = new User({ username: 'Maria', password: 'Doe' })
            const wendy = new User({ username: 'Wendy', password: 'Pan' })
            const peter = new User({ username: 'Peter', password: 'Pan' })

            await Promise.all([john.save(), maria.save(), wendy.save(), peter.save()])

            const johnNote1 = new Note({ user: john.id, text: 'hola mundo', audience: 'public' })
            const johnNote2 = new Note({ user: john.id, text: 'hola mon' })
            const mariaNote1 = new Note({ user: maria.id, text: 'hello world', audience: 'public' })

            await Promise.all([johnNote1.save(), johnNote2.save(), mariaNote1.save()])

            // comment a note

            const mariaNote1WendyComment1 = new Comment({ user: wendy.id, text: 'que dizze!?' })
            const _mariaNote1 = await Note.findById(mariaNote1.id)
            _mariaNote1.comments.push(mariaNote1WendyComment1)

            await _mariaNote1.save()

            // peter likes wendy comment on maria's note

            const __mariaNote1 = await Note.findById(mariaNote1.id)
            const __mariaNote1WendyComment1 = __mariaNote1.comments.find(comment => comment._id.toString() === mariaNote1WendyComment1.id)
            const __mariaNote1WendyComment1PeterLikeIndex = __mariaNote1WendyComment1.likes.findIndex(like => like.toString() === peter.id)

            if (__mariaNote1WendyComment1PeterLikeIndex < 0)
                __mariaNote1WendyComment1.likes.push(peter.id)
            else
                __mariaNote1WendyComment1.likes.splice(__mariaNote1WendyComment1PeterLikeIndex, 1)

            await __mariaNote1.save()

            // list notes

            const notes = await Note.find({ audience: 'public' }).populate('user', 'username').populate('comments.user', 'username').lean()

            //printOjectGraph(notes)
            console.log(notes)

            await disconnect()
        } catch(error) {
            console.log(error)
        } 

    }) ()
