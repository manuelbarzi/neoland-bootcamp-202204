console.log('Test filter')

{
    console.log('Return all the elements that pass the test in a new array')

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

    function filterWords(word){
        return word.length > 6
    }
    const result = filter(words, filterWords)

    console.log(result)

    console.assert(result[0] === 'exuberant')
    console.assert(result[1] === 'destruction')
    console.assert(result[2] === 'present')





}