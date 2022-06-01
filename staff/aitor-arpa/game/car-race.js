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


let thiefCount = 0
let thiefPosition = 0
let policePosition = 0
let policeCount = 0
let taxiCount = 0
let taxiPosition = 0
let busCount = 0
let busPosition = 0

const interval = setInterval(() => {
    console.clear()

    const thiefSteps = Math.round(Math.random() * 5)
    thiefCount += thiefSteps

    thiefPosition += thiefSteps
    if (thiefPosition > 100) thiefPosition -= 100

    const policeSteps = Math.round(Math.random() * 5)
    policeCount += policeSteps

    policePosition += policeSteps
    if (policePosition > 100) policePosition -= 100

    const taxiSteps = Math.round(Math.random() * 5)
    taxiCount += taxiSteps

    taxiPosition += taxiSteps
    if (taxiPosition > 100) taxiPosition -= 100


    const busSteps = Math.round(Math.random() * 5)
    busCount += busSteps

    busPosition += busSteps

    if (busPosition > 100) busPosition -= 100



    console.log(`${' '.repeat(thiefPosition)}${thief} (${thiefCount})`)
    console.log(`${' '.repeat(policePosition)}${police} (${policeCount})`)
    console.log(`${' '.repeat(taxiPosition)}${taxi} (${taxiCount})`)
    console.log(`${' '.repeat(busPosition)}${bus} (${busCount})`)

    if (policeCount > 100 || taxiCount > 100 || busCount > 100 || thiefCount > 100) {

        console.log(`the race is over`)
        clearInterval(interval)
        if (policeCount > 100) {
            console.log(`The '${police}' Winer!`)
            
            if (policeCount === taxiCount || taxiCount === policeCount){
                console.log(`'${taxiCount} draws with '${police}' `)
            }
            if (policeCount === busCount || busCount === policeCount){
                console.log(`'${bus} draws with '${police}' `)
            }
            else { (policeCount === thiefCount|| thiefCount=== policeCount)
                console.log(`'${thief} draws with '${police}' `)
            }
        }

        else if (taxiCount > 100) {
            console.log(`The '${taxi}' Winer!`)

            clearInterval(interval)
        }
        else if (busCount > 100) {
            console.log(`The '${bus}' Winer!`)

            clearInterval(interval)
        }
        else if (thiefCount > 100) {
            console.log(`The '${thief}' Winer!`)

            clearInterval(interval)
        }

       
    }

}, 100)