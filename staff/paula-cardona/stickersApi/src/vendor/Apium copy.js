console.log('%cApium v1.0', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')
//libreria

class Apium {
    call(method, url, options, callback){   //llamamos a la funcion call que le pasaremos como parametro el metodo, url, options i callback. cuerpo,body,header..es optionc, callback la respuesta
        const xhr = new XMLHttpRequest //creamos un connector
         
        xhr.addEventListener('load', event=>{ //callback de parametro
 
            const { status, responseText: payload } = event.target //nos interesa del evento la respuesta el estado i el responsetext
            callback(null, {status, payload})
        })

        xhr.addEventListener('error', () => {
            callback(new Error('API call fail'))
        })

        xhr.open(method,url)

        /*options: esperamos recibir todo esto en el objeto

        {
            headers : {
                Authorization: ...,
                `Content-Type`:... //entre comillas porque son dos palabras
            },

            body:...
        }
        */

        const { headers, body } = options //me quedo con los headers de las options y ahora son key-values
        
        if (headers) //si hay headers
            for(const key in headers) //para cada key voy hacer whr.setrequest...
                xhr.setRequestHeader(key, headers[key]) //cada value que hay en headers

        xhr.send(body) //si hay body que se envie, sino que no se envie nada (undefined)



    }
}