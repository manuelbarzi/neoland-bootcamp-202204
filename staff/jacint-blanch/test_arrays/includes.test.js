console.log("Test includes")

{
    console.log("Case")

    const primos = ["khaula", "isma", "yassin","abdo"]

    const estan = includes(primos, "yassin")
    const noEstan = includes(primos, "abdou")
    const isThere = includes(primos, "isma", 2)


    console.assert(estan === true)
    console.assert(noEstan === false)
    console.assert(isThere === false)

}