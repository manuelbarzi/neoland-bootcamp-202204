function retrieveUser(username, callback) {  // recuperar
    const user = users.find(user => user.username === username)
    // find devuelve el valor del primero que cumple la funcion

    if (!user) {
        callback(new Error(`user with username ${username} not found`))
        return
    }

    const copy = User.copyFrom(user)  //la función constructora tiene un propiedad que es una función, es decir User como constructor tiene que copiar una función que es user* nos vamos a user.js a escribirla

   
    callback(null, copy)
}


/* OTRAS OPCIONES DE COPY //delete user.password ERROR!

1)))))
forma de obtener las propiedades del objeto y iterar, para que te las devuelva en array.
la constante key tendrá esas propiedades. Cada propiedad pasar por la iteración
y guardamos cada elemento en cada posición en la constante key.
si key no es igual a pasword, guardar copia

const copy = {}

const keys= Object.keys(user) // devuelve ['name', 'username', 'password']

for(let i =0;i<keys.length; i++){
    const key = key [i]

    if (key) !== 'password')
        copy[key] = user[key]
}
para cada propiedad que no sea password del usuario me va a traer key y la va a guardar en copy




2)))))
for (const key in user)
    if (key !== 'password')
         copy[key] = user[key]
*//*    




3))))
todas las propiedades del user, guardalas en copy y elimina en copy el password
const copy = {...user}  de todas las pro
delete copy.password



/*
4)))))))))))
 const copy = {      //hago copia de los datos que devuelvo, la contraseña no puedo estar. la copia es para guardar los datos tmbien con contraseña
        name: user.name,
        username:user.username
    }
*/