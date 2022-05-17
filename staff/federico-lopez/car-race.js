/*
3 cars
first car that reaches 100 steps (count) wins
take into account two or all cars can reach at the same time (tie)
show results below
*/
const thief = '🚘'
const police = '🚔'
const taxi = '🚖'
const bus = '🚍'



let thiefSteps = 0
let policeSteps = 0
let taxiSteps = 0
let busSteps = 0

const interval = setInterval(() => {
    console.clear()

    const thiefMoves = Math.round(Math.random() * 5)
    const policeMoves = Math.round(Math.random() * 5)
    const taxiMoves = Math.round(Math.random() * 5)
    const busMoves = Math.round(Math.random() * 5)

    thiefSteps += thiefMoves
    policeSteps += policeMoves
    taxiSteps += taxiMoves
    busSteps += busMoves

    console.log(`${' '.repeat(thiefSteps)}${thief} (${thiefSteps})`)
    console.log(`${' '.repeat(policeSteps)}${police} (${policeSteps})`)
    console.log(`${' '.repeat(taxiSteps)}${taxi} (${taxiSteps})`)
    console.log(`${' '.repeat(busSteps)}${bus} (${busSteps})`)

    const steps = [
        {
            name: thief,
            steps: thiefSteps
        },
        {
            name: police,
            steps: policeSteps
        },
        {
            name: taxi,
            steps: taxiSteps
        },
        {
            name: bus,
            steps: busSteps
        }
    ]

    const winners = steps.filter(car => car.steps >= 100)

    if (winners.length === 1) {
        console.log(`${winners[0].name} wins`)
        clearInterval(interval)

    } else if (winners.length > 1) {
        console.log('TIED RACE!!')
        winners.forEach(car => console.log(`${car.name} wins`))
        clearInterval(interval)
    }

}, 100)
