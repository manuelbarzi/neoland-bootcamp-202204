console.log('TEST fill')
{    const array = [1, 2, 3, 4]
    {
        console.log('case 1')

       

        fill(array, 0, 2, 3)



        // console.log(array)
        // console.assert(array === [1, 2, 0, 0])
        console.assert(array[0] === 1)
        console.assert(array[1] === 2)
        console.assert(array[2] === 0)
        console.assert(array[3] === 0)

        /*
        const expectedResult = [1, 2, 0, 0]
    
        for (let i = 0; i < array.length; i++) {
            console.assert(array[i] === expectedResult[i])
        }
        */

    }


    {

        console.log('case 2')

       const array = [1, 2, 3, 4]

        fill(array,0)

        console.log(array)
        console.assert(array[0] === 0)
        console.assert(array[1] === 0)
        console.assert(array[2] === 0)
        console.assert(array[3] === 0)
    }




    {
        console.log ('case 3')
        const array = [1, 2, 3, 4]
        fill(array,2,2)

        console.assert(array[0] === 1)
        console.assert(array[1] === 2)
        console.assert(array[2] === 2)
        console.assert(array[3] === 2)
    }
    
}
