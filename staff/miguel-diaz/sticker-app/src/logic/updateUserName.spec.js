describe('updateUserName', () => {
    it('succeeds when user exists and Name is correct', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserName('chocolater', '123123123', '234234234', '234234234', error => {
            expect(error).toBeNull()

            const user = db.users.find(user => user.username === 'chocolater')

            expect(user.Name).toBe('234234234')
        })

        db.users.length = 0
    })

    it('fails when user exists and Name is incorrect', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserName('chocolater', '123123123' + '-wrong', '234234234', '234234234', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('wrong Name')
        })

        db.users.length = 0
    })

    it('fails when user exists and Name is same as new Name', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserName('chocolater', '123123123', '123123123', '123123123', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('current Name and new Name are the same')
        })

        db.users.length = 0
    })

    it('fails when user exists and new Name is not the same as new Name repeat', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserName('chocolater', '123123123', '234234234', '234234234' + '-wrong', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('new Name and new Name repeat are not the same')
        })

        db.users.length = 0
    })
})