const arrayNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// expected [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


const arrayChar = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
// expected ['i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']





// imprime en consola "hola Pauli!" utilizando la funcion y en una sola linea
let caji

const array = ['fede', 'diego', 'miguel', ['nath', ['Pauli', 'guapa!'], 'jordi'], 'xavi', 'leo']

const cajita = {cajas: 'mas cajitas', hola: 'cardona', array: caji, caji: array, propiedad: 'valor'}

const arrayCajitas = [caji, caji, cajita, caji]

const paquetito = {propiedad: arrayCajitas}


function imprimo( tu ){
    console.log(`hola ${tu}!`)
}

imprimo(paquetito.propiedad[2].caji[3][1][0])



// crear objetos y arrays para que cuando ponga esto en consola me salga TRUE
// paula.bebe[1][2].actimels





// funcion que cumpla lo siguiente

//codifica(12) = numerito
//codifica(200) = false
//codifica(200, 2) = true
//codifica(10, 6) = 16
//codifica(24, 4) = 28
//codifica('holi') = holita
//codifica(10, 6, 2) = 14
//codifica(20, 4, 4) = 20
//codifica(30, 10, 5) = 35







// imprime en consola "Pauli vende planticas bonicas" utilizando la funcion 
let caji

const array = ['fede', 'diego', 'miguel', ['nath', ['Pauli', 'guapa!'], 'jordi'], 'xavi', 'leo']

const cajita = {cajas: 'mas cajitas', hola: 'cardona', array: caji, caji: array, propiedad: 'vende'}

const arrayCajitas = [caji, 'planticas', cajita, caji]

const paquetito = {propiedad: arrayCajitas, planticas: 'bonicas'}


function imprimo( uno, dos, tres, cuatro ){
    console.log(`${cuatro} ${uno} ${tres} ${dos}!`)
}





function imprimo( uno, dos, tres, cuatro ){
    console.log(`${cuatro.platano} ${uno[1]} ${tres.manzana.limon} ${esto(dos)}!`)
}

function esto(fruta){
    return fruta.sandia
}