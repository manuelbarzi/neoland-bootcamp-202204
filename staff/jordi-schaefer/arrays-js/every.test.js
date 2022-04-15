
{
    console.log("TEST every")


    {
        console.log("CASE: 1")
        const num = [1, 2, 3, 4, 5, 6]

        const n = every(num, function (elem) {
            return elem % 2 == 0
        })
        console.assert(n === false)
    }



    {
        console.log("CASE: 2")
        const num = [8, 2, 6, 4, 10, 6]

        const n = every(num, function (elem) {
            return elem % 2 == 0
        })
        console.assert(n === true)
    }



    {
        console.log("CASE: 3")
        const elements = ['fire', 'air', 'water']

        const n = every(elements, function (elem) {
            if (elem.includes('r'))
                return true
        })
        console.assert(n === true)
    }



    {
        console.log("CASE: 4")

        const n = every(elements, function (elem) {
            if (elem.includes('t'))
                return true
        })
        console.assert(n === false)
    }


}