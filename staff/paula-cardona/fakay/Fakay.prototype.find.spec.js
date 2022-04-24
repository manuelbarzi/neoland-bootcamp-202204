describe ('find', function(){

    it ('element appears', function(){
    const array = new Fakay ('hola', 'silla', 1, 'playa')
    const result= array.find (function callback(element){
        return element==='silla' 
    } ) 
    expect(result).toBe('silla')

    })
})


