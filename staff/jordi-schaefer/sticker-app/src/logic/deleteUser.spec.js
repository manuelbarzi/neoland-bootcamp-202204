describe('deleteUser', () => {
    it('succeeds when user exists', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))
        db.users.push(new User('Le Chunga', 'lechunga', '123123123'))
        db.users.push(new User('Papa Gayo', 'papagayo', '123123123'))

        deleteUser('chocolater', error => {
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

        deleteUser('otro usuario', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe(`user with username "${'otro usuario'}" does not exist`)

            expect(db.users).toHaveSize(3)
        })

        db.users.length = 0
    })

/*     it('fails with wrong password', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))
        db.users.push(new User('Le Chunga', 'lechunga', '123123123'))
        db.users.push(new User('Papa Gayo', 'papagayo', '123123123'))

        deleteUser('chocolater'+'-wrong', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe(`user with username "${'chocolater' + '-wrong'}" does not exists`)

            expect(db.users).toHaveSize(3)
        })

        db.users.length = 0
    }) */

})