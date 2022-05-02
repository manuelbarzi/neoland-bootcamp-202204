describe('createNote', () => {
    it('should succeed for existing user', () => {
        users.length = 0
        users.push(new User('John Doe', 'john', '123123123'))
        notes.length = 0

        createNote('john', 'Adiós Mundo Cruel...', function(error) {
            expect(error).toBeNull()

            const note = notes[0]

            expect(note).toBeDefined()
            expect(note).toBeInstanceOf(Note)
            expect(note.username).toBe('john')
            expect(note.text).toBe('Adiós Mundo Cruel...')
            expect(note.date).toBeDefined()
            expect(note.date).toBeInstanceOf(Date)
        })

        notes.length = 0
        users.length = 0
    })

    it('should fail for non-existing user', () => {
        users.length = 0
        notes.length = 0

        createNote('john', 'Adiós Mundo Cruel...', function(error) {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('username "john" does not exist')
        })

        notes.length = 0
        users.length = 0
    })
})