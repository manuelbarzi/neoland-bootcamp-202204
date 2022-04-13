console.log('TEST FILTER')

{

console.count('Case filter')

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = filter(words, function(word) {
    return word.length > 6
    }
)

console.assert(result[0] === "exuberant")
console.assert(result[1] === "destruction")
console.assert(result[2] === "present")

}

{
console.count('Case filter')

const words = ['spray', 'limit', 'elite', 'limit', 'destruction', 'present'];

const result = filter(words, function(word) {
    return word === 'limit'
    }
)

console.assert(result[0] === "limit")
console.assert(result[1] === "limit")
}
