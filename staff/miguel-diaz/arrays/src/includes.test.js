console.log('INCLUDE TEST')

const animales = ['leon', 'gato', 'perro', 'cuervo']

{
    console.log('EJERCICIO 1')
    const resultado = includes(animales, 'gato')
    console.assert(resultado)
}

{
    console.log('EJERCICIO 2')
    const resultado = includes(animales, 'cuervo', 1)
    console.assert(resultado)
}
