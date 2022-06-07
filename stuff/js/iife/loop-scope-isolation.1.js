var people = ['Juan', 'Pedro', 'Francisco', 'Sofia']

for (var i = 0; i < people.length; i++) {
    setTimeout(function() {
        console.log(`Hello, ${people[i]}!`) // WTF?
    }, 1000 * i)
}