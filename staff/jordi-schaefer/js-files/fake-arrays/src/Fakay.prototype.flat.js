
Fakay.prototype.flat = function (niveles=1){  // recivo el array y los sub niveles que quiero profundizar
    const nuevo = new Fakay() // creo el nuevo array que devolvere
    let c=1 // creo una variable para contar los niveles
    for (let i=0; i<this.length; i++){ //recorro el array que he recivido


        // caso para N iteraciones,  FUNCIONA la logica!! 

        // a tener en cuenta: el new_array tiene que se const porque sino sobreescribe al llamar a la nueva funcion dentro de la funcion
        // las variables 'n' y 'c' son nuevas y unicas dentro de cada sub-funcion
       if (typeof this[i] === 'object' && c<=niveles){ // si tengo 1 array y no he llegado al tope de niveles
           result = this[i].flat(niveles-1) // extraigo 1 mas
           for (let j=0; j<result.length; j++){
                nuevo[nuevo.length++]=result[j] // en cada posicion dentro del objeto se lo añado al nuevo array
            }
            c++ // me apunto 1 nivel mas
       }


        else { // si no hay ningun objeto sino valor (numerico o string) o  ya he llegado al tope de niveles: lo añado al nuevo array
            nuevo[nuevo.length++]=this[i]
        }
    }
    return nuevo
}