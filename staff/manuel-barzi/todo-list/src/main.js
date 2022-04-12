var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`


printList(list)

console.log(extractStats(list))
// { todo: 3, doing: 1, done: 2 }

console.log(extractTotalHours(list))
// 37.5

console.log(extractTodoHours())
// 26.5

console.log(extractDoneHours())
// 4

