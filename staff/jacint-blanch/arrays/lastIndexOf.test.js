console.log("lastIndexOf")

{
    console.log("Case")

    const ropa = ["camisa", "zapatos", "camisa", "zapatos", "sudadera", "pantalon"]

    const ropaPosition = lastIndexOf(ropa, "zapatos")
    const noRopaPosition = lastIndexOf(ropa, "jersei")
    const startRightRopa = lastIndexOf(ropa, "camisa", 2)
    const fromRightRopa = lastIndexOf(ropa, "camisa", -2)

    
    console.assert(ropaPosition === 3)
    console.assert(noRopaPosition === -1)
    console.assert(startRightRopa === 2)
    console.assert(fromRightRopa === 2)

}