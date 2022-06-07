let index = 0

function forEach(array, callback) {
    if (index < array.length) {
        callback(array[index++])

        forEach(array, callback)
    }
}

// demo

const nums = [1, 2, 3, 4, 5]

forEach(nums, num => console.log(num))