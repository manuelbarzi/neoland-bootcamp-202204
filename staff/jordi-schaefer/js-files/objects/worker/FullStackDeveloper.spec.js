describe('FullStackDeveloper', () => {
    it('should build a FullStackDeveloper', () => {
        const fullDeveloper = new FullStackDeveloper('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        expect(fullDeveloper instanceof FullStackDeveloper).toBe(true)
        expect(fullDeveloper instanceof Developer).toBe(true)
        expect(fullDeveloper instanceof Worker).toBe(true)
        expect(fullDeveloper.name).toBe('Peter Pan')
        expect(fullDeveloper.email).toBe('peter@pan.com')
        expect(fullDeveloper.socialSecurityNumber).toBe('SEC-123123123')
        expect(fullDeveloper.id).toBe('ID-123123123')
        expect(fullDeveloper.birthDate.getFullYear()).toBe(2000)
        expect(fullDeveloper.birthDate.getMonth()).toBe(11)
        expect(fullDeveloper.birthDate.getDate()).toBe(31)
        expect(fullDeveloper.status).toBe('pause')
    })

    it('should work', () => {
        const fullDeveloper = new FullStackDeveloper('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        fullDeveloper.work()

        expect(fullDeveloper.status).toBe('working')
    })

    it('should break', () => {
        const fullDeveloper = new FullStackDeveloper('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        fullDeveloper.break()

        expect(fullDeveloper.status).toBe('pause')
    })

    it('should code', () => {
        const fullDeveloper = new FullStackDeveloper('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        fullDeveloper.code()

        expect(fullDeveloper.status).toBe('coding full stack')
    })
})