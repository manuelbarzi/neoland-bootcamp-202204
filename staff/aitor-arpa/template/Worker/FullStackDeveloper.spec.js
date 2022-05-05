describe('FullStackDeveloper', () => {
    it('should build a developer', () => {
        const developer = new FullStackDeveloper('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        expect(developer instanceof FullStackDeveloper).toBe(true)
        expect(developer instanceof Developer).toBe(true)
        expect(developer.name).toBe('Peter Pan')
        expect(developer.email).toBe('peter@pan.com')
        expect(developer.socialSecurityNumber).toBe('SEC-123123123')
        expect(developer.id).toBe('ID-123123123')
        expect(developer.birthDate.getFullYear()).toBe(2000)
        expect(developer.birthDate.getMonth()).toBe(11)
        expect(developer.birthDate.getDate()).toBe(31)
        expect(developer.status).toBe('pause')
    })

    it('should work', () => {
        const developer = new FullStackDeveloper('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        developer.work()

        expect(developer.status).toBe('working')
    })

    it('should break', () => {
        const developer = new FullStackDeveloper('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        developer.break()

        expect(developer.status).toBe('pause')
    })

    it('should code full stack', () => {
        const developer = new FullStackDeveloper('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        developer.code()

        expect(developer.status).toBe('coding full stack')
    })
})