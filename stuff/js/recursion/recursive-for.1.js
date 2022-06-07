let index = 0

function forEach(array, callback) {
    if (array.length > 0) {
        callback(array[index++])

        if (index < array.length)
            forEach(array, callback)
    }
}

// demo

const nums = [1, 2, 3, 4, 5]

forEach(nums, num => console.log(num))