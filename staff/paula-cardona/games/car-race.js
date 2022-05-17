/*
3 cars
first car that reaches 100 steps (count) wins
take into account two or all cars can reach at the same time (tie)
show results below
*/



const cars = [
    { // car 1 
        name: 'thief',
        icon: '🚘',
        count: 0,
        position: 0
    },
    { // car 2 
        name: 'police',
        icon: '🚔',
        count: 0,
        position: 0
    },
    { // car 3
        name: 'taxi',
        icon: '🚖',
        count: 0,
        position: 0,
    },
    { // car 4
        name: 'bus',
        icon: '🚍',
        count: 0,
        position: 0
    }
]

const metaPosition = 100

const interval = setInterval (() => {

    console.clear()

    for (let i = 0; i < 4; i++) {
        const steps = Math.round(Math.random() * 5) //usamos un math random para ver como va sumando caracteres aleatoriamente que seran los pasos del thief. La función Math.round() retorna el valor de un número redondeado al entero más cercano.
        cars[i].count += steps     
        cars[i].position += steps
        if (cars[i].position > 100) {
            cars[i].position -= 100
            cars[i].count -= 100
        }
        console.log(`${' '.repeat(cars[i].position)}${cars[i].icon} (${cars[i].count})`)
    }
    
    let winnerMessage = ''

    for (let i = 0; i < 4; i++) 
        if (cars[i].count === metaPosition) winnerMessage += `${cars[i].name} winner `
    
    if (winnerMessage.length) { // 0 is equal to false
        console.log(winnerMessage)
        clearInterval(interval)
    }

}, 100)