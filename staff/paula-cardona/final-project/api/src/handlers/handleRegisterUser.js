const { registerUser } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')


module.exports = (req, res) => { //tengo un express escuchando sin parar si le llega un metodo post si lo recibe hace la callback
    try { //ponemos el try catch para las comprobaciones sincronas como que no se haya hecho bine la descomponetizacion siguiente o las validaciones dentro de la funcion registerUser
        const { body: {name, surnames, username, email, password, address } } = req //del body pido las propiedades del name, username i password
        
        registerUser(name, surnames, username, email, password, address) //hacemos el registerUser pasandole los parametros de name, username i password
            .then(() => res.status(201).send()) //esperaremos a que se complete y si lo ha hecho correcto a través del .then enviaremos la respuesta de creado (201). solo le enviamos el status, no le enviamos cuerpo por eso nohace falta el json solo send()
            .catch (error => handleErrorsAndRespond(error, res))//si el registro a fallado       
    } catch (error) { //los errores de la lógica los manejamos por el middleware, es decir por este index
       
        handleErrorsAndRespond(error, res)

    }
}