function Worker(name, email, socialSecurityNumber, id, birthDate) {
    this.name = name
    this.email = email
    this.socialSecurityNumber = socialSecurityNumber
    this.id = id
    this.birthDate = birthDate
    this.status = 'pause'
    

}

Worker.prototype.work = function() {
    this.status = 'working'
}

Worker.prototype.break = function (){
    this.status = 'pause'
}


/*    it('should build a Worker', () => {
        const worker = new Worker('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        expect(worker instanceof Worker).toBe(true)
        expect(worker.name).toBe('Peter Pan')
        expect(worker.email).toBe('peter@pan.com')
        expect(worker.socialSecurityNumber).toBe('SEC-123123123')
        expect(worker.id).toBe('ID-123123123')
        expect(worker.birthDate.getFullYear()).toBe(2000)
        expect(worker.birthDate.getMonth()).toBe(11)
        expect(worker.birthDate.getDate()).toBe(31)
    })

    it('should work', () => {
        const worker = new Worker('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        worker.work()

        expect(worker.status).toBe('working')
    })

    it('should break', () => {
        const worker = new Worker('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        worker.break()

        expect(worker.status).toBe('pause')
    })
}) */