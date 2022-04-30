describe('createNote', () => {
    it('should succeed for existing user', () => {
        users.length = 0
        user.push(new User('Miguel', 'miguel', 'miguel123'))
        notes.length = 0

        creatNote('miguel', 'Adios Mundo Cruel...', function() {
            expect(error).toBeNull()
            const note = notes[0]

            expect(note).toBeDefined()
            expect(note).toBeInstanceOf(Note)
            expect(note.username).toBe('miguel')
            expect(note.text).toBe('Adios Mundo Cruel...')
            expect(note.date).toBeDefined()
            expect(note.date).toBeInstanceOf(Date)   
        })

        notes.length = 0
        users.length = 0
    })

    it('should fail for non-existing user', ()=> {
        users.length = 0
        users.length = 0

        creatNote('miguel', 'Adios Mundo Cruel...', function(error) {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('username "miguel" does not exist')

        })

        notes.length = 0
        users.length = 0

    })
})