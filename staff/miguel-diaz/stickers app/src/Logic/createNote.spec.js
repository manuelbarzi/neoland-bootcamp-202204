describe('createNote', () => {
    it('should succeed for existing user', () => {
        db.users.length = 0
        db.users.push(new User('Miguel Angel', 'miguel', 'miguel123'))
        db.notes.length = 0

        createNote('miguel', 'Adiós Mundo Cruel...', function(error, noteId) {
            expect(error).toBeNull()
            expect(noteId).toBeDefined()
            expect(noteId).toBeInstanceOf(String)

            const note = db.notes[0]

            expect(note).toBeDefined()
            expect(note).toBeInstanceOf(Note)
            expect(note.id).toBe(noteId)
            expect(note.username).toBe('miguel')
            expect(note.text).toBe('Adiós Mundo Cruel...')
            expect(note.date).toBeDefined()
            expect(note.date).toBeInstanceOf(Date)
        })

        db.notes.length = 0
        db.users.length = 0
    })

    it('should fail for non-existing user', () => {
        db.users.length = 0
        db.notes.length = 0

        createNote('miguel', 'Adiós Mundo Cruel...', function(error) {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('username "miguel" does not exist')
        })

        db.notes.length = 0
        db.users.length = 0
    })
})