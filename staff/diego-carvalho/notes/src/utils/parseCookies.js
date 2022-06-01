//funcion para separar todas las cookies

function parseCookies(cookieString = '') {//creo una función y le paso como argumento todo el las cookies que viene del navegador  en como string
    const cookies = {}//creo un obj vacio para guardas las cookies separadas por las keyValue.
    
    const keyValues = cookieString.split('; ')//aqui hago un split para separar las cookies por ; y espacio...

    keyValues.forEach(keyValue => {//...un forEach de las keyValue para ejecuta la función una vez por cada cookie...
        const separatorIndex = keyValue.indexOf('=')//...y separalas desde el indexof de "="

        const key = keyValue.substring(0, separatorIndex)//uso el metodo substring para tener la key (nombre de la cookie) desde del la posición 0 hasta separator (=)...
        const value = keyValue.substring(separatorIndex + 1, keyValue.length)//...y desde saparator hasta el final del obj

        cookies[key] = value//pongo las key y los valores en el obj vacio (cookies)...
    })

    return cookies//...y return 
}

module.exports = parseCookies