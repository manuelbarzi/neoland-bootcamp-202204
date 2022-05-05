describe('authenticateUser', function(){
    it('should succed on user already registered in data', function(){
        users.length = 0 //data file cleaned to test

        users.push({name: 'Carlinhos', username: 'carlinhos', password:'1234'})

        authenticateUser('carlinhos', '1234', function(error){
            expect(error).toBeNull()
        })
        users.length = 0
    })

    it('should fail on trying with a not registered username',  function(){
        users.length = 0 

        users.push({name: 'Carlinhos', username: 'carlinhos', password:'1234'})

        authenticateUser('diego', '1234', function(error){
            expect(error).toBeDefined()
            expect(error.message).toBe('wrong credentials')
        })
        users.length = 0 

    })

    it('should fail on trying with a not registered password',  function(){
        users.length = 0 

        users.push({name: 'Carlinhos', username: 'carlinhos', password:'1234'})

        authenticateUser('carlinhos', '12345678', function(error){
            expect(error).toBeDefined()
            expect(error.message).toBe('wrong credentials')
        })
        users.length = 0 

    })


})