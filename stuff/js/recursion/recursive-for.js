
function forEach(array, callback) {
    (function loop(index) {
        if (index < array.length) {
            callback(array[index])

            loop(index + 1)
        }
    })(0) // Immediately Invoked Function Expression (IIFE)
}

// demo

const nums = [1, 2, 3, 4, 5]

forEach(nums, num => console.log(num))