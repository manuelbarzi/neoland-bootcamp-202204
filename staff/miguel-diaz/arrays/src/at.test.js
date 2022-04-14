/*

- crear un for donde el valor positivo recorra el array desde 0
- dentro del 1er for validar las posiciones
- crear otro for donde el valor negativo recorra el array desde el final -1 de su length
- dentro del 2ndo for validar las posiciones negativas
*/

console.log('AT TEST')

{
    const marcasv2 = ['nike', 'adidas', 'rebook', 'apple']
    let indice = 2

    console.log('Caso 1')
    const resultado = att(marcasv2, indice)
    console.log(resultado) 
}


{
    const marcasv2 = ['nike', 'adidas', 'rebook', 'apple']
    let indice = -1

    console.log('Caso 2')
    const resultado = att(marcasv2, indice)
    console.log(resultado) 
}


