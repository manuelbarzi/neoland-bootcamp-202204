
function forEach(array, callback) {
    let index = 0;

    function loop() {
        if (index < array.length) {
            callback(array[index++])
    
            loop()
        }
    }

    loop()
}

// demo

const nums = [1, 2, 3, 4, 5]

forEach(nums, num => console.log(num))