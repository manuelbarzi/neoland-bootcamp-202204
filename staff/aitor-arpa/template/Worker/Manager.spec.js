describe() ('Manager', () => {
        it ('hould buil a Manager', () => {
        const manager = new Manager ('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        expect(manager instanceof Manager).toBe(true)
        expect(manager instanceof Developer).toBe(true)
        expect(manager instanceof Worker).toBe(true)
        expect(developer.name).toBe('Peter Pan')
        expect(developer.email).toBe('peter@pan.com')
        expect(developer.socialSecurityNumber).toBe('SEC-123123123')
        expect(developer.id).toBe('ID-123123123')
        expect(developer.birthDate.getFullYear()).toBe(2000)
        expect(developer.birthDate.getMonth()).toBe(11)
        expect(developer.birthDate.getDate()).toBe(31)
        expect(developer.status).toBe('pause')
    })
})