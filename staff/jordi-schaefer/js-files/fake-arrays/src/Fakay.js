function Fakay() { // creo un constructor de tipo Fakay
    // le añade las propiedades que tendra el constructor
    for (let i = 0; i < arguments.length; i++) { // itero por todos los elementos que recibo
        const elem = arguments[i] 
        this[i] = elem  // creo una propiedad con nombre (el valor que tenga i en ese momentos) y le voy pasando los elementos
    }
    this.length = arguments.length // le añado la propiedad length, segun la cantidad de elementos que recibo
}



/*
ARRAY
[1, 2, 3, 4, 5]
[0]=1
[1]=2
[2]=3
...
array.length=5


OBJETO
0: 1
1: 2
2: 3
3: 4
4: 5
length=5
*/