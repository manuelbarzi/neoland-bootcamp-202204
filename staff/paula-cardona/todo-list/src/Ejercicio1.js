var numbers = '0,1,2,3,4,5,6,7,8,9'

//debugger

var sum = 0

for (var i = 0; i < numbers.length; i += 2) {
    var c = numbers[i]

    sum += Number(c)
}

console.log(sum)