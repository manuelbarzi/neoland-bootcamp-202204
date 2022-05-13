/* Espero que el Nuevo nombre no sea igual al Nombre y Que el nuevo nombre no este en la
base de datos, para ello creo un usuario nuevo con el push indicadando nombre, Usuario y Pas 
con find o indexOF ¿? buscare si existe ese nombre en la base de datos */


describe('updateUserName', () => {


    it('Espero que el nombre sea diferente al nombre new', () => {
        db.users.length = 0

        db.users.push(new User('chocolater', 'chocolater', '123123123'))



        updateUserName('chocolater', 'chocolater',(error) =>  { 

            expect(db.users[0].name).toBe('chocolater')
            expect(error.message).toBe(`Your "chocolater" is the same "chocolater"`)
            expect(error).toBeIsantaOf(error)
                                
           
            db.users.length = 0
        })
    })



    it('Espero que el nombre sea diferente al nombre new y lo cambia', () => {
        db.users.length = 0

        db.users.push(new User('chocolater', 'chocolater', '123123123'))



        updateUserName('chocolater', 'chocolatero',(error) =>  { 

            expect(db.users[0].name).toBe('chocolater')
            expect(error.message).toBe(`Your "chocolater" is the same "chocolater"`)
                                
           
            db.users.length = 0
        })
    })

    
})
