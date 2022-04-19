{
    console.log('TEST splice')
    // slice(X, Y, Z): a partir de la posicion X (incluida) remplaza Y elementos por el Z elemento


    
    {
        console.log('CASE 1')
        
        const palabras = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        // expected = ['silla', 'mesa', 'cama', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        
        splice(palabras, 2, 0, 'cama') // a partir de la posicion 2, NO reemplazo ninguno y pongo 'cama'
        console.assert(palabras.length===8) // deberia ser 1 mas largo
        console.assert(palabras[2]==='cama') // en la posicion 2 estara cama
        console.assert(palabras[3]==='lampara') // y lampara pasara a la posicion 3
    }


    {
        console.log('CASE 2')
        
        const palabras = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        // expected = ['silla', 'mesa', 'cama', 'ordenador', 'puerta', 'armario', 'sofa']
        
        splice(palabras, 2, 1, 'cama') // a partir de la posicion 2, reemplazo 3 elementos y pongo 'cama'
        console.assert(palabras.length===7) // deberia ser 3 mas corto
        console.assert(palabras[2]==='cama') // en la posicion 2 estara cama
        console.assert(palabras[3]==='ordenador') // armario sera el siguiente
        console.assert(palabras[6]==='sofa') // y sofa pasara a la posicion 3
    }


    {
        console.log('CASE 3')
        
        const palabras = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        // expected = ['silla', 'mesa', 'cama', 'armario', 'sofa']
        
        splice(palabras, 2, 3, 'cama') // a partir de la posicion 2, reemplazo 3 elementos y pongo 'cama'
        console.assert(palabras.length===5) // deberia ser 3 mas corto
        console.assert(palabras[2]==='cama') // en la posicion 2 estara cama
        console.assert(palabras[3]==='armario') // armario sera el siguiente
        console.assert(palabras[4]==='sofa') // y sofa pasara a la posicion 3
    }


}