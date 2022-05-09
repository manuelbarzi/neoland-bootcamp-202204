var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`

printList(list) // expected output: undefined, prints: TODO buy milk (30m)
// TODO visit grandma (1d) DONE go to gym (3h) DOING learn js (6h)
// DONE meditate (1h) TODO meet friends (3h)

console.log('\n')
console.log('Extract Stats', extractStats(list)) // expected output: {done: 3, todo: 2, doing: 1}


console.log('Extract Total Hours', extractTotalHours(list)) // expected output: 37.5

console.log('Extract TODO Hours', extractTodoHours(list)) // expected output: 27

console.log('Extract DONE Hours', extractDoneHours(list)) // expected output:4