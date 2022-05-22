/* Buscaar el veiculo hoyweels  */
function searchVehicles(query, callback) {


    const xhr = new XMLHttpRequest
   xhr.addEventListener('load', event => {
        const { status } = event.target

        if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 200) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(null, data)
        }
    })

    xhr.addEventListener('error', event => callback(new Error('network error')))

    // TODO execute request
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles${query}`)

    xhr.send()
}

// Busqueda de todoos los hotweel con todos los datos
const search = 'dr'
// parametros ---   el pad con la variable de busqueda, error si hay algun error, nombre de variable 
//que le doy para qeu me guarde el resultado
searchVehicles(`?q=${search}`, (error, vehicle) => {
    if (error) return console.log(error.message)

    //  La api esta configurada para que cuando le pides el id te muestre toda la informacion del JSON
    
    vehicle.forEach(car =>
    searchVehicles(`/${car.id}`, (error, data) => {
        if (error) return console.log(error.message)

        

        console.log(data)
    }))
})

    
