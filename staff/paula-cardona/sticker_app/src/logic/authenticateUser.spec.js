describe('authenticateUser', () => {

    it('authenticateUser should suceed on valid credentials', ()=> {
        db.users.length = 0  //limio los datos antes de hacer un test siempre

        db.users.push ({  //creo un user nuevo para tener datos
            name: 'Pepito Grillo',
            username: 'pepito',
            password: '123123123'
        })
        
        authenticateUser('pepito', '123123123', (error) =>{ //espera el username y la contraseá y la funcion de error en este caso null para que si sea
            expect(error).toBeNull()
        })

        db.users.length = 0
    })

    it('authenticateUser should not suceed on valid credentials', () => {
        db.users.length = 0
        
        db.users.push({  // le pongo un usuario
            name: 'Miguel',
            username: 'miguelito',
            password: '123123123'  
        })

        authenticateUser('pepito', '123123123', function(error) {
            expect(error).toBeDefined()
            expect(error.message).toBe('wrong credentials')
        })
        db.users.length = 0
    })


})





