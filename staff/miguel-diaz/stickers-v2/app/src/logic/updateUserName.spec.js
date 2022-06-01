describe('updateUserName', () => {
    it('succeeds when user exists', () => {
        db.users.length = 0

        db.users.push(new User('Miguel Angel', 'miguel', 'miguel123'))

        updateUserName('miguel', 'michelo', error => {
            expect(error).toBeNull()

            const user = db.users.find(user => user.username === 'miguel')

            expect(user.name).toBe('michelo')
        })

        db.users.length = 0
    })

    it('fails when user dont exists', () => {
        db.users.length = 0

        db.users.push(new User('Miguel Angel', 'miguel', 'miguel123'))

        updateUserName('miguel' + '-wrong', 'michelo', error => {
            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with username "miguel-wrong" does not exists')

            expect(db.users).toHaveSize(1)
            const user = db.users.find(user => user.username === 'miguel')

            expect(user.name).toBe('Miguel Angel')
        })

        db.users.length = 0
    })

})