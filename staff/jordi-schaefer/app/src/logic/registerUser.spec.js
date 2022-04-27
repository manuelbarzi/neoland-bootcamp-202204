describe('registerUser' , () => {
    it ('Registrando nuevo User (que aun no este Registrado) ', () => {
        users.length = 0 // Utilizamos el .length para limpar el valor 
        
        registerUser ('zepe' ,'zepe', '123', function (error){
            expect(error).toBe(null) // como es nuevo usuario, no dara error
            expect(users).toHaveSize(1) // Comprueba que la tabla users tenga 1 elemento

            user = users[0] // guardo el usuario en la variable
            expect(user).toBeDefined() // y compruebo que existe
            
            expect(user.name).toBe('zepe') 
            expect(user.username).toBe('zepe')
            expect(user.password).toBe('123')
        })
        users.length = 0
    })

    it ('Registar usuario nuevo ya registrado', () => {
        users.length = 0
        
        users.push({  // le pongo un usuario
            name: 'zepe',
            username: 'zepe',
            password: '123'  
        })

        registerUser ('zepe' ,'zepe', '123', (error) => { // y llamo la funcion con el usuario ya existente
            expect(error).toBeDefined()     // espero que el error este definido
            expect(error.message).toBe('username already exists') // comprueba que muestra el mensaje 
        })

        users.length = 0
    })
})