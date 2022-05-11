function retrieveUser(token, callback) {
    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        //const { target: { status } } = event
        const status = event.target.status

        if (status === 200) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            const user = { name: data.name, username: data.username } //guardare la información de usuario de name i username que es lo que devolverá

            callback(null, user) //cn la info del usuario
        } else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`) //no enviamos json, enviamos authorization que es la convinacion de dos palabras, bearer y el token

    xhr.send() //no tengo body porque es un GET, LE PEDIMOS DATOS
}
    


