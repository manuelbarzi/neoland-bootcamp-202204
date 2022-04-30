console.log('TEST AT2')

{
    const numbers = [1, 20, 500, 5]

    const result = at(numbers, 2)



    console.assert(result === 500)
    console.assert(result.length === 1)
}

{
    const fruits = ["watermelon", "strawberris", "banana", "melon"]

    const result = at(fruits, -2)

    console.assert(result === "banana")
    console.assert(result.length === 1)
}