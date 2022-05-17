const api = new Apium('https://b00tc4mp.herokuapp.com/api')

api.get('/hotwheels/vehicles?q=batman', null, (error, response) => {
    if (error) return alert(error.message)

    console.log(1, JSON.parse(response.payload))
})

api.get('/hotwheels/vehicles/FYF63', null, (error, response) => {
    if (error) return alert(error.message)

    console.log(2, JSON.parse(response.payload))
})