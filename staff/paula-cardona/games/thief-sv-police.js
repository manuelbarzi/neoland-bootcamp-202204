const thief = '🚘' //declaro coche ladron
const police = '🚔' //declaro coche policia

let thiefCount = 10 //inicializamos a contar a partir del 10
let thiefPosition = thiefCount //el kilometraje es la position, es lo que ira sumando
let policeCount = 0
let policePosition = 0

const interval = setInterval(() => { //Ejecuta una función o un fragmento de código (evento de tiempo) de forma repetitiva cada vez que termina el periodo de tiempo determinado.
    console.clear() //limpia consola

    const thiefSteps = Math.round(Math.random() * 5) //usamos un math random para ver como va sumando caracteres aleatoriamente que seran los pasos del thief. La función Math.round() retorna el valor de un número redondeado al entero más cercano.
    thiefCount += thiefSteps //+= se denomina operador de asignación compuesta y sirve para sumarle una cantidad al valor de una variable. thiedcount va a ir variandose según el valor que tenga thiefstep ya que esta igualado.

    thiefPosition += thiefSteps
    if (thiefPosition > 100) thiefPosition -= 100 //operador de asignación, le iguala y le asigna

    const policeSteps = Math.round(Math.random() * 6)
    policeCount += policeSteps

    policePosition += policeSteps
    if (policePosition > 100) policePosition -= 100

    console.log(`${' '.repeat(thiefPosition)}${thief} (${thiefCount})`)
    console.log(`${' '.repeat(policePosition)}${police} (${policeCount})`)

    if (policeCount > thiefCount) {
        console.log('catched!')

        clearInterval(interval)
    }
}, 100)
