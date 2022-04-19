{
    console.log('TEST slice')
    // slice(inicio, fin) devuelve un nuevo array que es el recorte del original desde y hasta las posiciones dadas (final NO incluido)


    
    {
        console.log('CASE 1')
        
        const palabras = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        // expected = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        
        const result = slice(palabras) // si no le doy numero devuelve el mismo array
        console.assert(result.length===7)
        console.assert(result[0]==='silla')
        console.assert(result[6]==='sofa')
    }


    {
        console.log('CASE 2')
        
        const palabras = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        // expected = ['lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        
        const result = slice(palabras, 2) // si le doy 1 numero indica solo el inicio del nuevo array que devolvera
        console.assert(result.length===5)
        console.assert(result[0]==='lampara')
        console.assert(result[4]==='sofa')
    }


    {
        console.log('CASE 3')
        
        const palabras = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        // expected = ['lampara', 'ordenador', 'puerta']
        
        const result = slice(palabras, 2, 5) // si le doy 2 numeros indica el inicio y el final que no estara incluido
        console.assert(result.length===3)
        console.assert(result[0]==='lampara')
        console.assert(result[2]==='puerta')
    }

    
    {
        console.log('CASE 4')
        
        const palabras = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        // expected = ['mesa', 'lampara', 'ordenador', 'puerta']
        
        const result = slice(palabras, 1, -2) // si le doy 2 numeros indica el inicio y el final que no estara incluido
        console.assert(result.length===4)
        console.assert(result[0]==='mesa')
        console.assert(result[3]==='puerta')
    }

}