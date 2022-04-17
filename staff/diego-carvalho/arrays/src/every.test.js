
console.log('TEST every')


{
    console.log('Test 01')

    const numbers = [2, 4, 6, 0]


    function isSmallerThanOne(value) {
        if (value < 6) {
            return true
        } else {
            return false
        }
    }


    function customEvery(array, comparer) {
        for (let i = 0; i < array.length; i++) {
            const result = comparer(array[i])

            if (result === false) {
                return false

            }

        }

        return true
    }

    customEvery(test, isSmallerThanOne)
}

















/*
// Is every age bigger than 1
function isBiggerThanOne(value) {
    if (value > 1) {
        return true
    } else {
        return false
    }
}

function customEvery (array, comparer) {
    for (let i = 0; i < array.length; i++) {
        const isFalse = comparer(array[i]) === false
        if (isFalse ) {
            return false
        } else{

            return true
        }
        
    }

}

const areAgesMoreThanOne = customEvery(age, isBiggerThanOne)

// every(function() {
    
// })

// const biggerThan1 = [2, 3, 4]

// every(1, biggerThan1)

// console.assert(biggerThan1 === true)
}

// function every (maxCap, array){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < maxCap) {
//             return false
//         }
    
//     }
// }*/