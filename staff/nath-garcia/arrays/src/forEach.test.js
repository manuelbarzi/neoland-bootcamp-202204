console.log('TEST forEach')

const nums = [1, 2, 3]

{
    console.log('CASE 1')

    let sum = 0

    forEach(nums, function(num) {
        sum += num
    })

    console.assert(sum === 6)
}

const chars = ['h', 'e', 'l', 'l', 'o']

{
    console.log('CASE 2')

    let word = ''

    forEach(chars, function(char){
        word += char
    })

    console.assert(word === 'hello')
}