describe('deleteUser', () => {
    it('succeed when the user exists', () => {
        db.users.length = 0

        db.users.push(new User('carlitos', 'carlos', '123123123'))
        db.users.push(new User('pedrito', 'pedro', '456456456'))
        db.users.push(new User('juancito', 'juan', '789789789'))

        deleteUser('carlos', (error) => {
            const userExists = db.users.some(user => user.username === 'carlos')

            expect(error).toBeNull()
            expect(error).not.toBeInstanceOf(Error)
            expect(db.users).toHaveSize(2)
            expect(userExists).toBeFalse()
        })

        db.users.length = 0
    })
    it('fails when the user does not exist', () => {
        db.users.length = 0

        db.users.push(new User('carlitos', 'carlos', '123123123'))
        db.users.push(new User('pedrito', 'pedro', '456456456'))
        db.users.push(new User('juancito', 'juan', '789789789'))

        deleteUser('evaristo', (error) => {
            const userExists = db.users.some(user => user.username === 'evaristo')

            expect(error).not.toBeNull()
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('the user does not exist')
            expect(db.users).toHaveSize(3)
            expect(userExists).toBeFalse()
        })
    })
})