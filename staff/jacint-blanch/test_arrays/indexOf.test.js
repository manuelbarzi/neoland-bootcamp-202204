console.log("Test indexOf")

{
    console.log("Case")

    const fruits = ["melon", "fresa", "sandia", "manzana","melocoton"]

    const firstFruit = indexOf(fruits, "sandia")
    const theresNot = indexOf(fruits, "aguacate")
    const positionFruit = indexOf(fruits, "manzana", -2)

    console.assert(firstFruit === 2)
    console.assert(theresNot === -1)
    console.assert(positionFruit === 3)
}
