describe('createNote', () => {                                   //creamos una nota
    it('should succeed for existing user', () => {              //test que funcione bien el crear una nota
        db.users.length = 0                                       //borramos datos de usuario i de notas
        db.users.push(new User('John Doe', 'john', '123123123')) //añadimos neuvo usuario
        db.notes.length = 0

        createNote('john', 'Adiós Mundo Cruel...', function(error, noteId) {  //creamos una nota que se llama adiós mundo cruel, que pasamos por parametros su nombre, y una funcion(en la función le pasamos un error y un id)
            expect(error).toBeNull()  //que no haya problemas
            expect(noteId).toBeDefined()   //esperamos que la nota tenga numero
            expect(noteId).toBeInstanceOf(String)   //deseamos que la nota sea objeto de String

            const note = db.notes[0]  //las notas que vayamos creando en la base de datos lo guardaremos en la constante note

            expect(note).toBeDefined()   
            expect(note).toBeInstanceOf(Note) //todas las notas 
            expect(note.id).toBe(noteId)
            expect(note.username).toBe('john')
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

        createNote('john', 'Adiós Mundo Cruel...', function(error) {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('username "john" does not exist')
        })

        db.notes.length = 0
        db.users.length = 0
    })
})