describe('createNote', () => {
    it('El Usuario existe e Entra', () => {

        db.users.length = 0
        db.users.push(new User('Desconocido', 'descon', '123'))
        db.notes.length = 0

        createNote ('descon', 'Adios MUNDO', function(error){
            expect(error).toBeNull()

            const note = db.notes[0]

            expect(note).toBeDefined()
            expect(note).toBeInstanceOf(Note)
            expect(note.username).toBe('descon')
            expect(note.text).toBe('Adios MUNDO')
            expect(note.date).toBeDefined()
            expect(note.date).toBeInstanceOf(Date)


        })
        db.notes.length = 0
        db.users.length = 0
    })

    it(' El Usuario no existe', () => {

        db.users.length = 0
        db.notes.length = 0

        createNote ('des', 'insdf', function(error){

            expect(error).toBeInstanceOf(Error)
            expect(error).toBeDefined()
            expect(error.message).toBe('username "des" does not exist')
        })
        db.notes.length = 0
        db.users.length = 0
    })

})