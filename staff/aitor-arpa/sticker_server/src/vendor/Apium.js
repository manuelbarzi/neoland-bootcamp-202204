console.log('%cApium v1.0', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')
// Metodo propio para Conectar con API 
class Apium {
    call (method,url, options, callback) { // creamos la funcion call con los parametros 
        const xhr = new XMLHttpRequest

        xhr.addEventListener('load', event => {
            const { status, responseText: payload } = event.target // recogemos el status y los payload

            callback(null, { status, payload }) // todo ok y nos devuelve el status y el payload
        })
    
    xhr.addEventListener ('error', () => { // Mostramos los errores que nos puede enviar 
        callback(new Error( 'API call fail'))
    })
    
    xhr.open(method, url) // envio el metodo ( GET,POST,PATCH )y la url de la api

       /*  DESCOMPOSICION DE LAS OPCIONES
        options:
        {
            headers: {
                Authorization: ...,
                'Content-Type': ...
            },
            body: ...
        }
        */
        const { headers, body } = options
        
        if (headers) // Cuando lleva body
            for (const key in headers) // header: Content-Type--> key
                xhr.setRequestHeader(key, headers[key])
        xhr.send(body) // si no contiene  header solo envio el body (token)
    }


}