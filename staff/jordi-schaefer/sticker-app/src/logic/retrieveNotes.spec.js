describe('retrieveUser', () => {

    it('should succeed on existing user and note', () => {
        db.users.length = 0
        db.notes.length = 0
        
        db.users.push(new User('wendy name', 'wendy', '123123'))

        db.notes.push(new Note('wendy','Happy Flower!'))
        db.notes.push(new Note('wendy','Happy Flower! (1)'))
        db.notes.push(new Note('wendy','Happy Flower! (2)'))
        db.notes.push(new Note('peter','test not to read'))
        db.notes.push(new Note('peter','test not to read'))
        db.notes.push(new Note('peter','test not to read'))


        retrieveNotes('wendy', (error, note) => {
            
            expect(error).toBeNull()
            expect(note).toBeDefined()
            expect(note).toHaveSize(3)
            
            const [note1, note2, note3] = note

            expect(note1.username).toBe('wendy')
            expect(note1.text).toBe('Happy Flower!')
            expect(note2.username).toBe('wendy')
            expect(note2.text).toBe('Happy Flower! (1)')
            expect(note3.username).toBe('wendy')
            expect(note3.text).toBe('Happy Flower! (2)')
        })
        
        db.users.length = 0
        db.notes.length = 0
    })

    
    it('should succeed with user but no notes', () => {
        db.users.length = 0
        db.notes.length = 0
         
        db.users.push(new User('wendy name', 'wendy', '123123'))

        db.notes.push(new Note('pirulo','Happy Flower!'))
        db.notes.push(new Note('pirulo','Happy Flower! (1)'))
        db.notes.push(new Note('pirulo','Happy Flower! (2)'))
        db.notes.push(new Note('peter','test not to read'))
        db.notes.push(new Note('peter','test not to read'))
        db.notes.push(new Note('peter','test not to read'))

        retrieveNotes('wendy', (error, note) => {
            
            expect(error).toBeNull()
            expect(note).toBeDefined()
            expect(note).toHaveSize(0)
            
        })
        
        db.users.length = 0
        db.notes.length = 0
    })


    it('should not succeed with no user found', () => {
        db.users.length = 0
        db.notes.length = 0
         
        db.users.push(new User('wendy name', 'wendy', '123123'))

        db.notes.push(new Note('wendy','Happy Flower!'))
        db.notes.push(new Note('wendy','Happy Flower! (1)'))
        db.notes.push(new Note('wendy','Happy Flower! (2)'))
        db.notes.push(new Note('peter','test not to read'))
        db.notes.push(new Note('peter','test not to read'))
        db.notes.push(new Note('peter','test not to read'))

        retrieveNotes('pirulo', (error, note) => {
            
            expect(error).toBeDefined()
            expect(error.message).toBe('user with username pirulo not found')
            expect(note).toBe(null)
            
        })
        
        db.users.length = 0
        db.notes.length = 0
    })

})