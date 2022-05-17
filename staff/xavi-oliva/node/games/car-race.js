/*
3 cars
first car that reaches 100 steps (count) wins
take into account two or all cars can reach at the same time (tie)
show results below
*/

const thief  = '🚘'
const police = '🚔'
const taxi   = '🚖'
const bus    = '🚍'


let thiefPosition  = 0
let policePosition = 0
let taxiPosition   = 0
let busPosition    = 0

const interval = setInterval(() => {
    console.clear()

    thiefPosition  += Math.round(Math.random() * 5)
    policePosition += Math.round(Math.random() * 5)
    taxiPosition   += Math.round(Math.random() * 5)
    busPosition    += Math.round(Math.random() * 5)

    console.log(`\n🚥 ${'-'.repeat(100)} 🏁`)
    console.log(`${' '.repeat(thiefPosition)}${thief} (${thiefPosition})`)
    console.log(`${' '.repeat(policePosition)}${police} (${policePosition})`)
    console.log(`${' '.repeat(taxiPosition)}${taxi} (${taxiPosition})`)
    console.log(`${' '.repeat(busPosition)}${bus} (${busPosition})`)
    console.log(`🚥 ${'-'.repeat(100)} 🏁`)

    if (thiefPosition > 99 && thiefPosition > policePosition && thiefPosition > taxiPosition && thiefPosition > busPosition) {
        console.log('THIEF WINS!')

        clearInterval(interval)
    } else if (policePosition > 99 && policePosition > thiefPosition && policePosition > taxiPosition && policePosition > busPosition) {
        console.log('POLICE WINS!')

        clearInterval(interval)
    } else if (taxiPosition > 99 && taxiPosition > thiefPosition && taxiPosition > policePosition && taxiPosition > busPosition) {
        console.log('TAXI WINS!')

        clearInterval(interval)
    } else if (busPosition > 99 && busPosition > thiefPosition && busPosition > policePosition && busPosition > taxiPosition) {
        console.log('BUS WINS!')

        clearInterval(interval)
    } else if (thiefPosition > 99 && thiefPosition === policePosition) {
        console.log("IT'S A TIE")

        clearInterval(interval)
    } else if (thiefPosition > 99 && thiefPosition === taxiPosition) {
        console.log("IT'S A TIE")

        clearInterval(interval)
    } else if (thiefPosition > 99 && thiefPosition === busPosition) {
        console.log("IT'S A TIE")

        clearInterval(interval)
    } else if (taxiPosition > 99 && taxiPosition === policePosition) {
        console.log("IT'S A TIE")

        clearInterval(interval)
    } else if (taxiPosition > 99 && taxiPosition === busPosition) {
        console.log("IT'S A TIE")

        clearInterval(interval)
    } else if (policePosition > 99 && policePosition === busPosition) {
        console.log("IT'S A TIE")

        clearInterval(interval)
    }
}, 100)
