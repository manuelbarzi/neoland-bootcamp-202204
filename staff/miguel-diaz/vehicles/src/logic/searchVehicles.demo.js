searchVehicles('hulk', (error, vehicles) => {
    if (error) return console.error(error.message)

    console.log(vehicles)
})