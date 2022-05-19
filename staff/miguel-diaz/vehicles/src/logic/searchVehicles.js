function searchVehicles(query, callback) {
    // TODO validate input args

    const xhr = new XMLHttpRequest

    // TODO attend response
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
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)

    xhr.send()
}