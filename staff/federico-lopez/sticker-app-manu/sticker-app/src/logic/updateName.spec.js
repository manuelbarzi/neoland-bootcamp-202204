describe('updateName', () => {
    it('succeed when the new name is different from the previous one', () => {
        db.users.length = 0

        db.users.push(new User('carlos', 'carlitos', '123123123'))

        updateName('carlitos', 'carlos', 'carles', error => {
            expect(error).toBeNull()

            expect(db.users[0].name).toBe('carles')
        })

        db.users.length = 0
    })

    it('fails when name and new name are equals', () => {
        db.users.length = 0

        db.users.push(new User('carlos', 'carlitos', '123123123'))

        updateName('carlitos', 'carlos', 'carlos', error => {
            expect(error).not.toBeNull()
            expect(error.message).toBe('new name and previous name are equals')

            expect(db.users[0].name).toBe('carlos')
        })

        db.users.length = 0        
    })
    it('fails when the user does not exist', () => {
        db.users.length = 0

        db.users.push(new User('carlos', 'carlitos', '123123123'))

        updateName('pedro', 'carlos', 'carles', error => {
            expect(error).not.toBeNull()
            expect(error.message).toBe('user does not exist')

            expect(db.users[0].name).toBe('carlos')
        })

        db.users.length = 0        
    })
})