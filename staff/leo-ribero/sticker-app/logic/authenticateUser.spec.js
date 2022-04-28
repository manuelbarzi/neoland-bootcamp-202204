describe('authenticateUser', () => {
	it('should succeed on existing user with correct credentials', () => {
		users.length = 0

		users.push({
			name: 'John Doe',
			username: 'johndoe',
			password: '123123123'
		})

		authenticateUser('johndoe', '123123123', error => {
			expect(error).toBeNull()
		})

		users.length = 0
	})

	it('should fail on existing user with incorrect password', () => {
		users.length = 0

		users.push({
			name: 'John Doe',
			username: 'johndoe',
			password: '123123123'
		})

		authenticateUser('johndoe', 'wrong-123123123', error => {
			expect(error).toBeDefined()
			expect(error.message).toBe('wrong credentials')
		})

		users.length = 0
	})

	it('should fail on existing user with incorrect username', () => {
		users.length = 0

		users.push({
			name: 'John Doe',
			username: 'johndoe',
			password: '123123123'
		})

		authenticateUser('wrong-johndoe', '123123123', error => {
			expect(error).toBeDefined()
			expect(error.message).toBe('wrong credentials')
		})

		users.length = 0
	})

	it('should fail on non-existing user', () => {
		users.length = 0

		authenticateUser('johndoe', '123123123', error => {
			expect(error).toBeDefined()
			expect(error.message).toBe('wrong credentials')
		})

		users.length = 0
	})
})