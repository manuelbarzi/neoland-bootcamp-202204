describe('Container', () => {
    it('should construct instance of Container', () => {
        const cont = new container

        expect(cont instanceof container).toBe(true)
        expect(cont.status).toBe('close doors')
    })

    it('should assign dimensions', () => {
        const cont = new container(100, 50, 150)

        expect(cont.width).toBe(100)
        expect(cont.height).toBe(50)
        expect(cont.depth).toBe(150)
    })

    it('should open doors', () => {
        const cont = new container

        cont.open()
        expect(cont.status).toBe('open doors')
    })

    it('should close doors', () => {
        const cont = new container

        cont.close()
        expect(cont.status).toBe('close doors')
    })
})