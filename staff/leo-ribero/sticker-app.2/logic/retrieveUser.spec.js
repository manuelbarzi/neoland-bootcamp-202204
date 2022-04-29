describe('retrieveUser', () => {
	it('should succeed on existing user (username)', () => {
		users.length = 0

		users.push({
			name: 'John Smith',
			username: 'johnsmith',
			password: '123123123'
		})

		retrieveUser('johnsmith', (error, user) => {
			expect(error).toBeNull()

			expect(user).toBeDefined()
			expect(user.name).toBe('John Smith')
			expect(user.username).toBe('johnsmith')
			expect(user.password).toBeUndefined()
		})
	})
})