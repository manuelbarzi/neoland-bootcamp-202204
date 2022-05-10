describe('authenticateUser', ()=>{ //hecho por Ventu

    it('authenticateUser should succeed on valid credentials', () =>{

        db.users.length = 0

        const user = {
            name : 'Pepito Grillo',
            username: 'pepito',
            password: '123123123'
        }
        db.users.push(user)

        authenticateUser('pepito', '123123123', function(error) {
            expect(error).toBeNull()
        })

        db.users.length = 0

    })

    it('authenticateUser should fail on invalid credentials', ()=> {

        db.users.length = 0

        db.users.push ({
            name : 'Pepito Grillo',
            username: 'pepito',
            password: '123123123'
        })

        authenticateUser('manolito', '123123123', error =>{

            expect(error).toBeDefined()

            expect(error.message).toBe('wrong credentials')
        })

        db.users.length = 0
    })

})


 