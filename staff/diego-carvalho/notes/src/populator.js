const {writeFile} = require('fs')
const {User, Note} = require('./models')
const{creatId, deleteFiles} = require('./utils')

deleteFiles('./db/users', error => {
    if (error) return done(error)

    deleteFiles('./db/notes', error => {
        if (error) return done(error)

        const user = new User('Maria Doe', 'mariadoe', '123123123')

        const json = JSON.stringify(user)

        const userId = createId()

        writeFile(`./db/users/${userId}.json`, json, error => {
            if (error) return done(error)

            const texts = ['note 1', 'note 2', 'note 3']

            let count = 0, _error

            texts.forEach(text => {
                const noteId = createId()

                const note = new Note(noteId, userId, text)

                const json = JSON.stringify(note)

                writeFile(`./db/notes/${noteId}.json`, json, error => {
                    if (!_error) {
                        if (error) return done(_error = error)

                        count++

                        if (count === texts.length) {
                            console.log('populated')
                        }
                    }
                })
            })
        })
    })
})

