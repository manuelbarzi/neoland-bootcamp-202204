//empezamos hacer test para probar username que no exista o repetido 
//primer paso y ultimo paso borrar base de datos

describe('registerUser',()=>{
    it('should succed on new user (not already existing)', ()=> {
        db.users.length = 0 //limpia la base de datos

        registerUser('Tor Tuga', 'tortuga', '123123123', function(error) {
            expect(error).toBeNull()

            expect(db.users).toHaveSize(1)

            const user = db.users[0]

            expect(user).toBeDefined()
            
            expect(user.name).toBe('Tor Tuga')
            expect(user.username).toBe('tortuga')
            expect(user.password).toBe('123123123')
        })

        db.users.length = 0
    })


    it('should fail on trying to register an already existing user (same username)', () => {
        db.users.length = 0

        db.users.push({
        name: 'Cacá Tua',
        username: 'cacatua',
        password: '123123123'
        })

        registerUser('Cacá Tua', 'cacatua', '123123123', function(error) {
            expect(error).toBeDefined() //porque has modificado el array

            expect(error.message).toBe('username already exists')
        })
       db.users.length = 0
    })
})
