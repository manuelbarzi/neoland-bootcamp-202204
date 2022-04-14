
{

    console.log("TEST some")

    {
        console.log("CASE: 1")
        const num = [1, 2, 3, 4, 5, 6]


        const n = some(num, function (elem) {
            return elem % 2 == 0
        })

        console.assert(n === true)
    }


    {
        console.log("CASE: 2")
        const elements = ['fire', 'air', 'water']


        const n = some(elements, function (elem) {
            if (elem.includes('t'))
                return true
        })
        console.assert(n === true)
    }


    {
        console.log("CASE: 3")

        const n = some(elements, function (elem) {
            if (elem.includes('p'))
                return true
        })
        console.assert(n === false)
    }

    {
        console.log("CASE: 4")

        const n = some(elements, function (elem) {
            if (elem.includes(4))
                return true
        })
        console.assert(n === false)
    }

}