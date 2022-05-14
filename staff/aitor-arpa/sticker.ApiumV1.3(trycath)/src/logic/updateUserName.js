/* Creo funcion donde le pasare por parametros el nombre y el nuevo nombre recogidos por los input 
del formulario de UpdateUserName ( faltara 1 input en su componente).
Condiciones --> -Que el nombre sea diferente al Nuevo nombre 
                -Que el Nuevo nombre sea diferente a los introducidos en la base de datos (OPCIONAL) 
si todo se cumple igualo el nombre al nuevo nomber devuelvo null conforme todo va bien */
function updateUserName(token, name, callback) {

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')
    
    api.patch('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name }) // es lo que envio al servidor 
    }, (error, { status, payload }) => {
       if(status === 204) {
        const data = JSON.parse(payload)  // payload es la respuesta de servidor 

        callback(null, data.name)

    } else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload)

        callback(new Error, data.name)

    } else {
        callback(new Error('server error'))
    }

})
}
