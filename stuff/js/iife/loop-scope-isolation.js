var people = ['Juan', 'Pedro', 'Francisco', 'Sofia']

for (let i = 0; i < people.length; i++) {
    setTimeout(function () {
        console.log(`Hello, ${people[i]}!`)
    }, 1000 * i)
}