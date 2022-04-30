describe('createNote', () => {
    it('should succeed for existing user', () => {
        db.users.length = 0
        db.users.push(new User('John Doe', 'john', '123123123'))
        db.notes.length = 0

        createNote('john', 'Adiós mundo cruel...', function(error) {
            expect(error).toBeNull()

            const note = db.notes[0]

            expect(note).toBeDefined()
            expect(note).toBeInstanceOf(Note)
            expect(note.username).toBe('john')
            expect(note.text).toBe('Adiós mundo cruel...')
            expect(note.date).toBeDefined()
            expect(note.date).toBeInstanceOf(Date)
        })

        db.notes.length = 0
        db.users.length = 0
    })

    it('should fail for non-existinh user', () => {
        db.users.length = 0
        db.notes.length = 0

        createNote('john', 'Adiós Mundo Cruel...', function(error) {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('username "john" does not exist')
        })

        db.notes.length = 0
        db.users.length = 0
    })
})