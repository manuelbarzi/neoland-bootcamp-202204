/* generamos una petición al servidor, con un post, i un content-type, json 
el servidor me va a responder cn el addeventlistener cuando venfa respuesta*/

function registerUser(name, username, password, callback){ //me connecto con el servidor, no guardo los datos en memoria
    const xhr = new XMLHttpRequest //le pido al servidor que maneje esta información creando un conector ajax

   xhr.addEventListener('load', event =>{ //cuando llegue respuesta, atiendela. Te exige ponerlo antes para tenerlo preparado. lo primero que miraremos es el estado para ver si da error o no y llamar la callback con error o no*/
        const status = event.target.status //para guardar el status

        if (status ===201) //si el status es 201 no hanrá error, esta bien porque habrá creado el registerUser
            callback(null)
        else if (status >=400 && status < 500) { 
            const json= event.target.responseText //sacamos la respuest de insomnia

            const data = JSON.parse(json) //la respuesta de data de json lo convierto en objeto

    
            callback(new Error(data.error)) //la propiedad de error de ese data
        }else callback(new Error('server error'))

        
    }) 

   xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users') //le declaro conexión

   xhr.setRequestHeader ('Content-Type', 'application/json') //le digo que le envio un json. cuando registramos un usuario se envia automaticamente un content-type (de color amarillo)
   //json:representación en texto de un objeto o un array
    // queremos pasar las propiedades de registerUser como texto, es decir como json

    const data= {name, username, password} //creamos un objeto y lo convertimos en json
    const json= JSON.stringify(data) //para convertirlo en string

    xhr.send(json) //le enviamos el json.

    
}

/* JSON.stringify(o)- lo convierto en texto
   o= JSON.parse- de texto a objeto*/