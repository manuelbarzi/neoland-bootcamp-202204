describe('authenticateUser', () => {

    it('authenticateUser should suceed on valid credentials', ()=> {
        users.length = 0  //limio los datos antes de hacer un test siempre

        const user = {  //creo un user nuevo para tener datos
            name: 'Pepito Grillo',
            username: 'pepito',
            password: '123123123'
        }
        users.push(user) //añado a users el user(nuestro data)
        
        authenticateUser('pepito', '123123123', function(error){ //espera el username y la contraseá y la funcion de error en este caso null para que si sea

            expect(error).toBeNull()
        })

    })
    it('authenticateUser should not suceed on valid credentials', () => {
        users.length = 0
        
        users.push({  // le pongo un usuario
            name: 'Miguel',
            username: 'miguelito',
            password: '123123123'  
        })

        authenticateUser('pepito', '123123123', function(error) {
            expect(error).toBe(null)
        })
        users.length = 0
    })


})





