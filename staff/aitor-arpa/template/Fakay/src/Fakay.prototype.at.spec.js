/* Le pasamos por parametro el indice del parametro que queremos que nos devuelva como resultado */


describe('Fakay Prototype at', () => {
    
    it('The indicate the index return element', function () {
       
        f = new Fakay(5, 12, 8, 130, 44)
        f.at(2)
        expect(f[2]).toBe(8)

    })

// TODO falta el Negativo
    it('The indicate the index negative return element to start back', function () {
        q = new Fakay ('a', 'b', 'c', 'd', 'e')
        q.at(-3)
        expect(q.at(-3)).toBe('c')
        // -5 -4 -3 -2 -1 


    })


    
    it('NO! indicate the index return undefine', function () {
        q = new Fakay ()
        q.at()
        expect(q).toBe(undefined)


    })
})