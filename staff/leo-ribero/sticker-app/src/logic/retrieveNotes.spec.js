describe('retrieveNotes', () => {
    it('returns user notes when user exits and has notes', () => {
        users.length = 0
        notes.length = 0

        users.push(new User('Lola Loles', 'lolaloles', '123123123'))
        users.push(new User('Torom Bolo', 'torombolo', '123123123'))

        notes.push(new Note('lolaloles','Primera nota de ll 1'))
        notes.push(new Note('lolaloles','Primera nota de ll 2'))
        notes.push(new Note('lolaloles','Primera nota de ll 3'))
        notes.push(new Note('lolaloles','Primera nota de ll 4'))

        notes.push(new Note('torombolo','Primera nota de tb 1'))
        notes.push(new Note('torombolo','Primera nota de tb 2'))
        notes.push(new Note('torombolo','Primera nota de tb 3'))
        notes.push(new Note('torombolo','Primera nota de tb 4'))

        retrieveNotes('lolaloles', (error, notes) => {
            // lo primero que tiene que verificar es si el usuario existe
            expect(error).toBeNull()

            expect(notes).toBeDefined()// que notas este definido

            expect(notes).toHaveSize(4)

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

        users.length = 0
        notes.length = 0
    })

    it('returns user notes when user does not exist', () => {
        users.length = 0
        notes.length = 0

        users.push(new User('Lola Loles', 'lolaloles', '123123123'))
        users.push(new User('Torom Bolo', 'torombolo', '123123123'))

        notes.push(new Note('lolaloles','Primera nota de ll 1'))
        notes.push(new Note('lolaloles','Primera nota de ll 2'))
        notes.push(new Note('lolaloles','Primera nota de ll 3'))
        notes.push(new Note('lolaloles','Primera nota de ll 4'))

        notes.push(new Note('torombolo','Primera nota de tb 1'))
        notes.push(new Note('torombolo','Primera nota de tb 2'))
        notes.push(new Note('torombolo','Primera nota de tb 3'))
        notes.push(new Note('torombolo','Primera nota de tb 4'))

        retrieveNotes('gatuna', (error, notes) => {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('username "elefante" does not exist')

            expect(notes).toBeUndefined()
  

        })

        users.length = 0
        notes.length = 0
    })

    it('returns empty array of notes when user exists and has no notes', () => {
        users.length = 0
        notes.length = 0

        users.push(new User('Lola Loles', 'lolaloles', '123123123'))
        users.push(new User('Torom Bolo', 'torombolo', '123123123'))

        notes.push(new Note('lolaloles','Primera nota de ll 1'))
        notes.push(new Note('lolaloles','Primera nota de ll 2'))
        notes.push(new Note('lolaloles','Primera nota de ll 3'))
        notes.push(new Note('lolaloles','Primera nota de ll 4'))

        retrieveNotes('torombolo', (error, notes) => {
            // lo primero que tiene que verificar es si el usuario existe
            expect(error).toBeNull()

            expect(notes).toBeDefined()// que notas este definido

            expect(notes).toHaveSize(0)

        })

        users.length = 0
        notes.length = 0
    })
})