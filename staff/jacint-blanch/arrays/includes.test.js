// console.log("Test includes")

// {
//     console.log("Case")

//     const primos = ["khaula", "isma", "yassin","abdo"]

//     const estan = includes(primos, "yassin")
//     const noEstan = includes(primos, "abdou")
//     const isThere = includes(primos, "isma", 2)


//     console.assert(estan === true)
//     console.assert(noEstan === false)
//     console.assert(isThere === false)

// }


describe('Test includes', function() {
    test('Should return true if elememt exists in the array', function() {
        const primos = ["khaula", "isma", "yassin","abdo"]

        expect(includes(primos, "yassin"), true)
        expect(includes(primos, "abdou"), true)
    })

    test('Should return false if no exist', function() {
        const primos = ["khaula", "isma", "yassin","abdo"]

        expect(includes(primos, "melon"), false)
        expect(includes(primos, "bacalao"), false)
    })
})