var list = `TODO buy milk (30m)
TODO visitar grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`



printList(list) //expected output: undefined, prints: TODO buy milk (30m)
// TODO visitar grandma (1d) DONE go to gym (3h) DOING learn js (6h)
// DONE meditate (1h) TODO meet friends (3h)

console.log('extractStats')
console.log(extractStats(list)) //expected output: {todo:3, doing: 1, done: 2}
console.log('\n\n')

console.log(extractTotalHours(list)) //expected output: 37.5

console.log(extractTodoHours(list)) //expected output: 27

console.log(extractDoneHours(list)) //expected output:4
