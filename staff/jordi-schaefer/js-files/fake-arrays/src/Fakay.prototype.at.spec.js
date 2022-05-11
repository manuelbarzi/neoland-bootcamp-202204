//recive un indice y devuelve el item que se encuentra en el index deseado
describe('Fakay.prototype.at', function () {
    
    it('should find elements with positive index', function() {
        const list = new Fakay(5, 11, 8, 130, 42, 56, 3, 24)
        const result = list.at(3)
        
        expect(result).toBe(130)
        expect(list.at(0)).toBe(5)
        expect(list.at(4)).toBe(42)
        expect(list.at(7)).toBe(24)
    })

    it('should find elements with negative index', function() {
        const list = new Fakay(5, 11, 8, 130, 42, 56, 3, 24)
        expect(list.at(-1)).toBe(24)
        expect(list.at(-3)).toBe(56)
        expect(list.at(-6)).toBe(8)
    })

})