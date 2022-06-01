const thief = '🚘' //declaro coche ladron
const police = '🚔' //declaro coche policia

let thiefCount = 10 //inicializo el recorrido a partir del 10
let thiefPosition = thiefCount //iguala la posición al conteo 
let policeCount = 0
let policePosition = 0

const interval = setInterval(() => { //es un evento de tiempo que ejecuta una funcion de froma repetitiva
    console.clear()

    const thiefSteps = Math.round(Math.random() *5) //utiliza la función Math.round y Math.random para contar aleatoriamente los carateres que se va a ir movinedo el coche 
    thiefCount +=thiefSteps 

    thiefPosition += thiefSteps
    if (thiefPosition > 100) thiefPosition -= 100

    const policeSteps = Math.round(Math.random() *6)
    policeCount += policeSteps
    
    policePosition += policeSteps
    if (policePosition > 100) policePosition -= 100

    console.log(`${ ' '.repeat(thiefPosition)}${thief} (${thiefCount})`)
    console.log(`${' '.repeat(policePosition)}${police} (${policeCount})`)

    if (policeCount > thiefCount) {
        console.log('catched!')

        clearInterval(interval)
    }
}, 100)