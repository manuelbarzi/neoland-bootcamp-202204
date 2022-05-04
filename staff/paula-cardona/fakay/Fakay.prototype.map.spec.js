describe('Fakay.prototype.map', function(){
    it ('map to UpperCase', function(){
    
    let array = new Fakay("hola", "que", "tal")
    let result = array.map(function(element){ //map como si fuera array
        return element.toUpperCase()
    })
    expect(result[0]).toBe('HOLA')
    expect(result[1]).toBe('QUE')
    expect(result[2]).toBe('TAL')

})
})
