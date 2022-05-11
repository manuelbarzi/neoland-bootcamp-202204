describe('updateUserName', () => {
    it('succeeds when user exists and name is correct', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater'))

        updateUserName('chocolater', 'Choco Later', 'Dieguinho DoBrasil', error => {
            expect(error).toBeNull()

            const user = db.users.find(user => user.username === 'chocolater')

            expect(user.name).toBe('Dieguinho DoBrasil')
        })

        db.users.length = 0
    })

    it('fails when  user exists and current name and new name are the same', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater'))

        updateUserName('chocolater', 'Choco Later', 'Choco Later', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('current name and new name are the same')
        })

        db.users.length = 0
    })
    

})