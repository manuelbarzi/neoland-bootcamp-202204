//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

describe ('splice', ()=>{
    test('insert a Feb between Jan and March', ()=> {
        const months = ['Jan', 'March', 'April', 'June'] //declaro el array
        
        const deletedElements = splice(months, 1, 0, 'Feb') //a la función de splice le pasaremos el array de months, el indice en posicion 1, eliminaremos 0 elementos y le pondremos febrero

        const expectedMonths = ['Jan', 'Feb', 'March', 'April', 'June'] //el array viejo añadiendo june

        const expectedDeletedElements = [] //el splice te devuelve un nuevo array que en este caso sera vacio ya que es 0

        expect(months).toEqual(expectedMonths) //esperamos que el array months del principio sea igual que ese array que se llamara expected months con june
        expect(deletedElements).toEqual(expectedDeletedElements)//esperamos que los elementos eliminados que son 0, sea igual al nuevo array de esos elementos eliminados, que en este caso son 0
    })

    test('replaces June by May', () => {
        const months = ['Jan', 'Feb', 'March', 'April', 'June']

        const deletedElements = splice(months, 4, 1, 'May')

        const expectedMonths = ["Jan", "Feb", "March", "April", "May"]

        const expectedDeletedElements = ['June']

        expect(months).toEqual(expectedMonths)
        expect(deletedElements).toEqual(expectedDeletedElements)
    })
})





