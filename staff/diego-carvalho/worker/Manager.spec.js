describe('Manager', () => {
    it('should build a manager', () => {
        const manager = new Manager('Leo Keller', 'leokeller@gamil.com', 'SSN000234', 'FY300422', new Date(1987, 8, 21))

        expect(manager instanceof Manager).toBe(true)
        expect(manager instanceof Worker).toBe(true)
        expect(manager.name).toBe('Leo Keller')
        expect(manager.email).toBe('leokeller@gamil.com')
        expect(manager.socialSecurityNumber).toBe('SSN000234')
        expect(manager.id).toBe('FY300422')
        expect(manager.birthDate.getFullYear()).toBe(1987)
        expect(manager.birthDate.getMonth()).toBe(8)
        expect(manager.birthDate.getDate()).toBe(21)
        expect(manager.status).toBe('pause')
    })
    it('should work', () => {
        const manager = new Manager('Leo Keller', 'leokeller@gamil.com', 'SSN000234', 'FY300422', new Date(1987, 8, 21))

        manager.work()

        expect(manager.status).toBe('working')
    })
    it('should break', () => {
        const manager = new Manager('Leo Keller', 'leokeller@gamil.com', 'SSN000234', 'FY300422', new Date(1987, 8, 21))

        manager.break()

        expect(manager.status).toBe('pause')
    })

    it('should manage', () => {
        const manager = new Manager('Leo Keller', 'leokeller@gamil.com', 'SSN000234', 'FY300422', new Date(1987, 8, 21))

        manager.manage()

        expect(manager.status).toBe('managing a department of the company')
    })
})