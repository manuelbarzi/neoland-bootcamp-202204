describe('Container', () => {
    test('should construct instances of Container', () => {
        const cont = new Container // new Container()

        expect(cont instanceof Container).toBe(true)
        expect(cont.status).toBe("🔒")
    })

    test('should assign dimensions', () => {
        const cont = new Container(100, 50, 150)

        expect(cont.width).toBe(100)
        expect(cont.height).toBe(50)
        expect(cont.depth).toBe(150)
    })

    test('should open doors', () => {
        const cont = new Container

        cont.open()

        expect(cont.status).toBe("🔓")
    })

    test('should close doors', () => {
        const cont = new Container

        cont.close()

        expect(cont.status).toBe("🔒")
    })
})