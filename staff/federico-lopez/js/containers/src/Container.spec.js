describe('Container', () => {
    it('should construct instances of Container', () =>{
        const cont = new Container;

        expect(cont instanceof Container).toBe(true);
        expect(cont.situation).toBe('🔒');
    })

    it('should assign dimensions', () => {
        const cont = new Container(100, 50, 150)

        expect(cont.width).toBe(100);
        expect(cont.height).toBe(50);
        expect(cont.depth).toBe(150);
    })

    it('should open doors', () => {
        const cont = new Container;

        cont.open();

        expect(cont.situation).toBe('🔓');
    })

})