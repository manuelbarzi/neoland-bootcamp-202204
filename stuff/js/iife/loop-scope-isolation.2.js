var people = ['Juan', 'Pedro', 'Francisco', 'Sofia']

for (var i = 0; i < people.length; i++) {
    (function(index) {
        setTimeout(function() {
            console.log(`Hello, ${people[index]}!`)
        }, 1000 * index)
    })(i)
}