var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`;



// function printList(list) {
//     console.log("REPORT:");
//     console.log(list);
//   }

//   printList(list);

  function extractStats(list) {
    // TODO
    var count = { todo: 0, doing: 0, done: 0 }

    for (var i = 0; i < list.length; i++) {
        if (list[i] === 'T' && list[i+1] === 'O' && list[i+2] === 'D' && list[i+3] === 'O') {
            count.todo++
        }
        else if(list[i] === 'D' && list[i+1] === 'O' && list[i+2] === 'I' && list[i+3] === 'N' && list[i+4] === 'G') {
          count.doing++
        }
        else if(list[i] === 'D' && list[i+1] === 'O' && list[i+2] === 'N' && list[i+3] === 'E') {
          count.done++
      }

    }

    console.log(count)

  }

  extractStats(list);