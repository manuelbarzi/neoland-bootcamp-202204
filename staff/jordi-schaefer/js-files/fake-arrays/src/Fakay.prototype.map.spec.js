describe('Fakay.prototype.map', function() {

    it('should sum 2 to all the elements', function(){
        const nums = new Fakay(1, 2, 3, 4)
        let s = 2

        const result = nums.map(function(elem){
            return elem +=s
        })
        expect(result).toBeInstanceOf(Fakay)
        expect(result[0]).toBe(3)
        expect(result[1]).toBe(4)
        expect(result[2]).toBe(5)
        expect(result[3]).toBe(6)
    })

    it('should add an array of letters', function(){
        const chars = new Fakay('a','b','c','d','e','f','g')
        const ler = 'Letra: '

        const result = chars.map(function(elem){ // le enviamos el array y la funciona
            return ler.concat(elem)            // cambio 'a' por 'Letra: a' y la DEVUELVO
        })
        expect(result).toBeInstanceOf(Fakay)
        expect(result[0]).toBe('Letra: a')
        expect(result[1]).toBe('Letra: b')
        expect(result[2]).toBe('Letra: c')
        expect(result[3]).toBe('Letra: d')
        expect(result[4]).toBe('Letra: e')
        expect(result[5]).toBe('Letra: f')
        expect(result[6]).toBe('Letra: g')
    })

    it('should take the first two letters', function(){
        const paises = new Fakay ('España','Argentina','Francia','Alemania','Brasil','Rusia','China')

        const result = paises.map (function(elem){ // le enviamos el array y la funciona
            const cap = elem.substring(0,2).toUpperCase()
            return cap             // cambio 'a' por 'Letra: a'
        })
    
        expect(result[0]).toBe('ES')
        expect(result[1]).toBe('AR')
        expect(result[2]).toBe('FR')
        expect(result[3]).toBe('AL')
        expect(result[4]).toBe('BR')
        expect(result[5]).toBe('RU')
        expect(result[6]).toBe('CH')
    })

    it('should calculate the volum', function(){
        const boxes = new Fakay(
            {w: 10, h:10, d:10},
            {w:20, h:20, d:20},
            {w:5, h:5, d:5}
        )
    
        const calculateVolume = box =>  {
            return box.w * box.h * box.d
        }
        //const calculateVolume = () =>  {return box.w * box.h * box.d}
        //const calculateVolume = () =>  {box.w * box.h * box.d}
        //const calculateVolume = () =>  box.w * box.h * box.d
        //const calculateVolume = box =>  {return box.w * box.h * box.d}
        //const calculateVolume = (box, cube) =>  {return box.w * box.h * box.d}
        
        
        const volumns = boxes.map (calculateVolume)
        const expected = [1000, 8000, 125]
    
        expect(volumns.length).toBe(expected.length)
    
        for (let i = 0; i < volumns.length; i++)
            expect(volumns[i] ).toBe(expected[i])
    })

})