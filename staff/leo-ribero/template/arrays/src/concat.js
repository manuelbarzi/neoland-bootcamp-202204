/*
PLANTEAMIENTO DEL EJERCICIO CASO1:

el método Array.prototype.concat() concatena dos arrays
devolviendo un tercer Array con los valores de los dos anteriores
sin modificar los dos primeros Arrays. 

PASOS:
1- Para emular este método (StandAlone)lo primero es crear
un nuevo Array vacio.

2- Creamos una funcion "concat" que recibe dos Arrays
y dentro de "concat" recorremos con un primer bucle el primer Array asignando los
valores que vaya recorriendo al Array vacio que, al finalizar el bucle, 
tendrá los mismos valores que este primer Array.

3- Recorremos el segundo Array asignando sus valores al Array que
inicialmente estaba vacio, y antes de pasar el segundo bucle contiene los mismos
valores del primer Array. Para que no reemplace los valores le decimos que comience a contar desde 
la posición final, es decir desde el actual valor de "i" o también podriamos usar "arrayNuevo.lenght"

*/

// const array1 = ['a', 'b', 'c']
// const array2 = ['d', 'e', 'f']

let result = []

function concat(uno, dos){
    // PRIMER BUCLE
	for (i=0; i < uno.length; i++) {
		result[i] = uno[i]                
	}
    // Antes de hacer el siguiente bucle declaramos nuevaVariable que recoge la posición de "i"
	// let pos = result.length
    let pos = i
    
	for (i=0; i < dos.length; i++) {
		result[pos] = dos[i] 
		pos++ 
	} 
	return result
}
/*
// Comprobación
let result = concat(array1,array2)
*/

// console.log(result)

/*
PLANTEAMIENTO DEL EJERCICIO CASO2:




*/