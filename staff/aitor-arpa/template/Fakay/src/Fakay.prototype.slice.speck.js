
describe ('Fakay.prototype.slice', function() {
    it('only start index', function(){
        let animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')
        animals.slice(2)
        expect(q[0]).toBe('camel')
        expect(q[1]).toBe('duck')
        expect(q[2]).toBe('elephant')
        expect(q.length).toBe(2)
 
    })

    it('with start and end Index', function(){

        let animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')
        animals.slice(2, 4)
        
        expect(q[0]).toBe('camel')
        expect(q[1]).toBe('duck')
        expect(q.length).toBe(1)  
    })

    it('with negative end', function() {

        const animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')
        const r = animals.slice(2, -2)
       
        expect(q[0]).toBe('camel')
        expect(q.length).toBe(0) 
    })


    
})