describe('FullStackDeveloper', () => {
    it('shold buil a Fullstack developer', () => {
        const fullStackDeveloper =  new Developer ('Diego Carvalho', 'diegocchaves@gmail.com', 'SEC-123123123', 'ID-123123123', new Date(1987, 07, 21))

        expect(fullStackDeveloper instanceof Developer).toBe(true)
        expect(fullStackDeveloper.name).toBe('Diego Carvalho')
        expect(fullStackDeveloper.email).toBe('diegocchaves@gmail.com')
        expect(fullStackDeveloper.socialSecurityNumber).toBe('SEC-123123123')
        expect(fullStackDeveloper.id).toBe('ID-123123123')
        expect(fullStackDeveloper.birthDate.getFullYear()).toBe(1987)
        expect(fullStackDeveloper.birthDate.getMonth()).toBe(07)
        expect(fullStackDeveloper.birthDate.getDate()).toBe(21)
        expect(fullStackDeveloper.status).toBe('pause')

    })
    it('should work', () => {
        const fullStackDeveloper = new FullStackDeveloper ('Diego Carvalho', 'diegocchaves@gmail.com', 'SEC-123123123', 'ID-123123123', new Date(1987, 07, 21))

        fullStackDeveloper.work()

        expect(fullStackDeveloper.status).toBe('working')
    })
    it('should break',() => {
        const fullStackDeveloper = new FullStackDeveloper('Diego Carvalho', 'diegocchaves@gmail.com', 'SEC-123123123', 'ID-123123123', new Date(1987, 07, 21))

        fullStackDeveloper.break()

        expect(fullStackDeveloper.status).toBe('pause')
    })
    it('should coding', () => {
        const fullStackDeveloper = new FullStackDeveloper('Diego Carvalho', 'diegocchaves@gmail.com', 'SEC-123123123', 'ID-123123123', new Date(1987, 07, 21))
        
        fullStackDeveloper.code()

        expect(fullStackDeveloper.status).toBe('coding full stack')
    })

})