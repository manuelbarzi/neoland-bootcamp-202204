describe('Manager', () => {

    it('Should build a manager', () => {

        const manager = new Manager('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        expect(manager instanceof Manager).toBe(true)
        expect(manager instanceof Worker).toBe(true)
        expect(manager.name).toBe('Peter Pan')
        expect(manager.email).toBe('peter@pan.com')
        expect(manager.socialSecurityNumber).toBe('SEC-123123123')
        expect(manager.id).toBe('ID-123123123')
        expect(manager.birthDate.getFullYear()).toBe(2000)
        expect(manager.birthDate.getMonth()).toBe(11)
        expect(manager.birthDate.getDate()).toBe(31)

    })

    it('should work', () => {
        const manager = new Manager('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))
    
        manager.work()
    
        expect(manager.status).toBe('working')
    })
    
    it('should break', () => {
        const manager = new Manager('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))
    
        manager.break()
    
        expect(manager.status).toBe('pause')
    })

    it('should manage', () => {
        const manager = new Manager('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        manager.manage()

        expect(manager.status).toBe('managing')
    })

})