describe('retrieveNotes', () => {

    it('returns user notes when user exits and has notes', () => {
        db.users.length = 0
        db.notes.length = 0

        db.users.push(new User('Lola Loles', 'lolaloles', '123123123'))
        db.users.push(new User('Torom Bolo', 'torombolo', '123123123'))

        db.notes.push(new Note('lolaloles','Primera nota de ll 1'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 2'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 3'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 4'))

        db.notes.push(new Note('torombolo','Primera nota de tb 1'))
        db.notes.push(new Note('torombolo','Primera nota de tb 2'))
        db.notes.push(new Note('torombolo','Primera nota de tb 3'))
        db.notes.push(new Note('torombolo','Primera nota de tb 4'))

        retrieveNotes('lolaloles', (error, notes) => {
            // lo primero que tiene que verificar es si el usuario existe
            expect(error).toBeNull()

            expect(notes).toBeDefined()// que notas este definido

            expect(notes).toHaveSize(4)

            // desesctruturando el array notes
            const [post1, post2, post3, post4] = notes

            expect(post1).toBeDefined()
            expect(post1.text).toBe('Primera nota de ll 1')

            expect(post2).toBeDefined()
            expect(post2.text).toBe('Primera nota de ll 2')

            expect(post3).toBeDefined()
            expect(post3.text).toBe('Primera nota de ll 3')

            expect(post4).toBeDefined() 
            expect(post4.text).toBe('Primera nota de ll 4')

        })

        db.users.length = 0
        db.notes.length = 0
    })

    it('fails when user does not exist', () => {
        db.users.length = 0
        db.notes.length = 0

        db.users.push(new User('Lola Loles', 'lolaloles', '123123123'))
        db.users.push(new User('Torom Bolo', 'torombolo', '123123123'))

        db.notes.push(new Note('lolaloles','Primera nota de ll 1'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 2'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 3'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 4'))

        db.notes.push(new Note('torombolo','Primera nota de tb 5'))
        db.notes.push(new Note('torombolo','Primera nota de tb 6'))
        db.notes.push(new Note('torombolo','Primera nota de tb 7'))
        db.notes.push(new Note('torombolo','Primera nota de tb 8'))

        retrieveNotes('gatuna', (error, notes) => {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('username "gatuna" does not exist')
            expect(notes).toBeUndefined()
        })

        db.users.length = 0
        db.notes.length = 0
    })

    it('returns empty array of notes when user exists and has no notes', () => {
        db.users.length = 0
        db.notes.length = 0

        db.users.push(new User('Lola Loles', 'lolaloles', '123123123'))
        db.users.push(new User('Torom Bolo', 'torombolo', '123123123'))

        db.notes.push(new Note('lolaloles','Primera nota de ll 1'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 2'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 3'))
        db.notes.push(new Note('lolaloles','Primera nota de ll 4'))

        retrieveNotes('torombolo', (error, notes) => {
            // lo primero que tiene que verificar es si el usuario existe
            expect(error).toBeNull()

            expect(notes).toBeDefined()// que notas este definido

            expect(notes).toHaveSize(0)

        })

        db.users.length = 0
        db.notes.length = 0
    })
})