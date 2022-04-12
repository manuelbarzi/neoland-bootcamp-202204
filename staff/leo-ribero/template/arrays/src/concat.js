// function concat() {
// 	
// }

// creamos una funcion que le llegan dos 2 array 
// creamos una array vacia
// recoremos la arry para extraer los objetos
// la guardamos en el array vacia
// recoremos la segunda array 
// la guardamos a continuacion de la array 3  

// const array1 = ['a', 'b', 'c']
// const array2 = ['d', 'e', 'f']

let arreglo3 = []
function concat(uno, dos){
	
	for (i=0; i < uno.length; i++) {
		arreglo3[i] = uno[i]                
	   
	}
	
	let pos = arreglo3.length
/*// para no remplazar los valores de la array 
uno declaramos que la varible pos que empieza en el final de la posicion de la array uno y no sobrescriba*/
	for (j=0; j < dos.length; j++) {
		arreglo3[pos] = dos[j] 
		pos++ 
	} 
	return arreglo3
}
let arregloResultado = concat(array1,array2)

// console.log(arregloResultado)