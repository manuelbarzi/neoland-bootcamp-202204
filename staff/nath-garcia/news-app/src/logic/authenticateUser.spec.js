describe('authenticateUser', ()=>{ //hecho por Ventu

    it('authenticateUser should succeed on valid credentials', () =>{

        users.length = 0

        const user = {
            name : 'Pepito Grillo',
            username: 'pepito',
            password: '123123123'
        }
        users.push(user)

        authenticateUser('pepito', '123123123', function(error) {
            expect(error).toBeNull()
        })

        users.length = 0

    })

    it('authenticateUser should fail on invalid credentials', ()=> {

        users.length = 0

        const user = {
            name : 'Pepito Grillo',
            username: 'pepito',
            password: '123123123'
        }
        users.push(user)

        authenticateUser('manolito', '123123123', function(error){

            expect(error).toBeDefined()

            expect(error.message).toBe('wrong credentials')
        })

        users.length = 0
    })

})


 