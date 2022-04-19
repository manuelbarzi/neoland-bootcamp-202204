console.log('Test push')
{
    console.log('CASE')

    const cars = ["ferrari", "jaguar" ,"nissan"]
    
    const totalCars = push(cars, "mazda")

    console.assert(cars.length === 4 )
    console.assert(cars[cars.length -1] === "mazda" )
    console.assert(cars.length === totalCars )
}















































// {
// console.log("Test push")

// const cars = ["seat", "ferrari", "peugeot", "nissan"];

// const length = push(cars, 'jaguar')

// console.assert(cars.length === 5)
// console.assert(cars[cars.length -1] === 'jaguar')
// console.assert(length === cars.length)



// console.log("Case 1")
// }
