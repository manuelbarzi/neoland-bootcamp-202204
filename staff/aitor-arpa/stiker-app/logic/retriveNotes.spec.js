describe('Retrive Notes', () => {

    it ('Esperamos que las los usuarios esten registrados y se guarden las notas', () => {

        db.user.length = 0
        db.notes.length = 0 

        db.user.push(new User('na na ', 'nana', '123'))
        db.user.push(new User('ba na ', 'bana', '123'))

        db.notes.push(new Note ('nana', 'hellow, note (1)'))
        db.notes.push(new Note ('nana', 'hellow, note (2)'))
        db.notes.push(new Note ('nana', 'hellow, note (3)'))
        db.notes.push(new Note ('bana', 'hellow, note (4)'))
        db.notes.push(new Note ('bana', 'hellow, note (5)'))
        db.notes.push(new Note ('bana', 'hellow, note (6)'))


        retriveNotes('bana', (error,notes) => {

        expect(error).toBeNull() // espero que el callback del error sea null   
        expect(notes).toBeDefined() // espero que las notas esten definidas
        expect(notes).toHaveSize(3)  // espera que esten definidas 3 

        const [note1, note2, note3] = notes 
        // note[1] = notes

        expect(note1).toBe('hellow, note (1)')
        expect(note1).toBeDefined()

        expect(note2).toBe('hellow, note (2)')
        expect(note2).toBeDefined()

        expect(note3).toBe('hellow, note (3)')
        expect(note3).toBeDefined()
        
    })

    db.user.length = 0
    db.notes.length = 0
})    

    it('returns empty array of notes when user exists and has no notes', () => {
        db.users.length = 0
        db.notes.length = 0

        db.users.push(new User('Ba Nana', 'banana', '123123123'))
        db.users.push(new User('Pi Rulo', 'pirulo', '123123123'))

        db.notes.push(new Note('banana', 'Hello, Note! (1)'))
        db.notes.push(new Note('banana', 'Hello, Note! (2)'))
        db.notes.push(new Note('banana', 'Hello, Note! (3)'))

        retriveNotes('pirulol', (error, notes) => {
          expect(error).toBeNull()
          
          expect(notes).toBeDefined()
          expect(notes).toHaveSize(0)
        })

        db.users.length = 0
        db.notes.length = 0
    })
})
