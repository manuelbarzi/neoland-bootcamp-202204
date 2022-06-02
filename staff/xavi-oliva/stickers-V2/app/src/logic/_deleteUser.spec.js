describe('deleteUser', () => {
    it('succeeds when user exists', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))
        db.users.push(new User('Le Chunga', 'lechunga', '123123123'))
        db.users.push(new User('Papa Gayo', 'papagayo', '123123123'))

        deleteUser('chocolater', '123123123', error => {
            expect(error).toBeNull()

            const user = db.users.find(user => user.username === 'chocolater')
            
            expect(user).toBeUndefined()

            expect(db.users).toHaveSize(2)
        })

        db.users.length = 0
    })

    it('fails when user does not exist', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))
        db.users.push(new User('Le Chunga', 'lechunga', '123123123'))
        db.users.push(new User('Papa Gayo', 'papagayo', '123123123'))

        deleteUser('wrong username', '123123123', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe(`user with username "${'wrong username'}" does not exist`)

            expect(db.users).toHaveSize(3)
        })

        db.users.length = 0
    })

    it('fails with wrong password', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))
        db.users.push(new User('Le Chunga', 'lechunga', '123123123'))
        db.users.push(new User('Papa Gayo', 'papagayo', '123123123'))

        deleteUser('chocolater', '123', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe(`wrong password`)

            expect(db.users).toHaveSize(3)
        })

        db.users.length = 0
    })

})