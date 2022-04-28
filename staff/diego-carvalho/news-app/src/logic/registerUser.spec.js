describe('registerUser', function(){
    it('should succeed if the user is not already registered', function(){
        users.length = 0 //data file cleaned to test
        
        registerUser('Carlos', 'carlitos', '12341234', function(error) {
            
            expect(error).toBeNull()//expect that the error tobe Null
            expect(users).toHaveSize(1)//expect that the user object has been registered
            expect(users[0]).toBeDefined()//expect that inside of object users have a defined object
            expect(users[0].username).toBe('carlitos')//expect that proprety called username to be carlitos
            expect(users[0].name).toBe('Carlos')//expect that proprety called name to be carlos
            expect(users[0].password).toBe('12341234')//expect that proprety called name to be 12341234
        })
        users.length = 0
    })

    it('should fail if the user is already registered', function(){
        users.length = 0

        users.push({//push the info 
            name:'Carlinhos Brown',
            username: 'carlinhos',
            password: '1234'
        })

        registerUser('Carlinhos Brown', 'carlinhos', '1234', function(error) {
            expect(error).toBeDefined()

            expect(error.message).toBe('username already exists')//expect a message of error to be 'username already exists'  
            
        })

        users.length = 0 
       
    })

})