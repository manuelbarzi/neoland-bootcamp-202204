var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`

printList(list) // expected output: undefined, prints: TODO buy milk (30m)
// TODO visit grandma (1d) DONE go to gym (3h) DOING learn js (6h)
// DONE meditate (1h) TODO meet friends (3h)

console.log(extractStats(list)) // expected output: {done: 3, todo: 2, doing: 1}

console.log(extractTotalHours(list)) // expected output: 37.5

console.log(extractTodoHours(list)) // expected output: 27

console.log(extractDoneHours(list)) // expected output:4