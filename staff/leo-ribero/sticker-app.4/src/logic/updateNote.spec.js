describe('updateNote', () => {
    it('succeeds when user and note already exist', () => {
        db.users.length = 0
        db.notes.length = 0

        db.users.push(new User('Lamis Mamer', 'lamismamer', '123123123'))
        db.users.push(new User('Pigca Risima', 'pigcarisima', '123123123'))

        let note

        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (1)'))
        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (2)'))
        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (3)'))
        db.notes.push(new Note('pigcarisima', 'Soy una nota que lleva el n: (4)'))
        db.notes.push(new Note('pigcarisima', 'Soy una nota que lleva el n: (5)'))
        db.notes.push(note = new Note('pigcarisima', 'Soy una nota que lleva el n: (5)'))

        updateNote('pigcarisima', note.id, 'Soy una nota que lleva el n: (6)', error => {
            expect(error).toBeNull()

            const _note = db.notes.find(__note => __note.id === note.id)

            expect(_note.text).toBe('Soy una nota que lleva el n: (6)')
        })

        db.users.length = 0
        db.notes.length = 0
    })

    it('fails when user exists, but note does not', () => {
        db.users.length = 0
        db.notes.length = 0

        db.users.push(new User('Lamis Mamer', 'lamismamer', '123123123'))
        db.users.push(new User('Pigca Risima', 'pigcarisima', '123123123'))

        let note

        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (1)'))
        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (2)'))
        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (3)'))
        db.notes.push(new Note('pigcarisima', 'Soy una nota que lleva el n: (4)'))
        db.notes.push(new Note('pigcarisima', 'Soy una nota que lleva el n: (5)'))
        db.notes.push(note = new Note('pigcarisima', 'Soy una nota que lleva el n: (5)'))

        updateNote('pigcarisima', note.id + '-wrong', 'Soy una nota que lleva el n: (6)', error => {
            expect(error).toBeDefined()

            expect(error.message).toBe(`note with id "${note.id + '-wrong'}" does not exist`)
        })

        db.users.length = 0
        db.notes.length = 0
    })

    it('fails when user does not exist', () => {
        db.users.length = 0
        db.notes.length = 0

        db.users.push(new User('Lamis Mamer', 'lamismamer', '123123123'))
        db.users.push(new User('Pigca Risima', 'pigcarisima', '123123123'))

        let note

        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (1)'))
        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (2)'))
        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (3)'))
        db.notes.push(new Note('pigcarisima', 'Soy una nota que lleva el n: (4)'))
        db.notes.push(new Note('pigcarisima', 'Soy una nota que lleva el n: (5)'))
        db.notes.push(note = new Note('pigcarisima', 'Soy una nota que lleva el n: (5)'))

        updateNote('pigcarisima' + '-wrong', note.id, 'Soy una nota que lleva el n: (6)', error => {
            expect(error).toBeDefined()

            expect(error.message).toBe(`username "${'pigcarisima' + '-wrong'}" does not exist`)
        })

        db.users.length = 0
        db.notes.length = 0
    })

    it('fails when user is not the owner of the note', () => {
        db.users.length = 0
        db.notes.length = 0

        db.users.push(new User('Lamis Mamer', 'lamismamer', '123123123'))
        db.users.push(new User('Pigca Risima', 'pigcarisima', '123123123'))

        let note

        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (1)'))
        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (2)'))
        db.notes.push(new Note('lamismamer', 'Soy una nota que lleva el n: (3)'))
        db.notes.push(new Note('pigcarisima', 'Soy una nota que lleva el n: (4)'))
        db.notes.push(new Note('pigcarisima', 'Soy una nota que lleva el n: (5)'))
        db.notes.push(note = new Note('pigcarisima', 'Soy una nota que lleva el n: (5)'))

        updateNote('lamismamer', note.id, 'Soy una nota que lleva el n: (6)', error => {
            expect(error).toBeDefined()

            expect(error.message).toBe(`user "lamismamer" does not own note with id "${note.id}"`)
        })

        db.users.length = 0
        db.notes.length = 0
    })
})