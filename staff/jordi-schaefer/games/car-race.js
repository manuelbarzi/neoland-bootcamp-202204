const car1=`🚍`
const car2='🚘'
const car3='🚔'

let position1 = 0
let position2 = 0
let position3 = 0

const interval = setInterval(() => {
    console.clear()

    position1 += (Math.random() * 4)
    position2 += (Math.random() * 4)
    position3 += (Math.random() * 4)

    console.log(`${'- '.repeat(50)} 🏁`)
    console.log(`${' '.repeat(position1)}${car1}`)
    console.log(`${' '.repeat(position2)}${car2}`)
    console.log(`${' '.repeat(position3)}${car3}`)
    console.log(`${'- '.repeat(50)} 🏁`)
    
    if (position1 > 100 || position2 > 100 || position3 > 100){
        clearInterval(interval)

        if(position1 > position2 && position1 > position3)
            console.log(`\n ${car1}  wins!`)
        else if (position2 > position1 && position2 > position3)
            console.log(`\n ${car2}  wins!`)
        else console.log(`\n ${car3}  wins!`)
    }

},100)  


/* const car1=`oªo`
const car2='oºo'
const car3='o^o'

let position1 = 0
let position2 = 0
let position3 = 0

const interval = setInterval(() => {
    console.clear()

    position1 += (Math.random() * 4)
    position2 += (Math.random() * 4)
    position3 += (Math.random() * 4)

    console.log(` ${'- '.repeat(50)} $`)
    console.log(`${' '.repeat(position1)}${car1}`)
    console.log(`${' '.repeat(position2)}${car2}`)
    console.log(`${' '.repeat(position3)}${car3}`)
    console.log(` ${'- '.repeat(50)} $`)
    
    if (position1 > 100 || position2 > 100 || position3 > 100){
        clearInterval(interval)

        if(position1 > position2 && position1 > position3)
            console.log(`\n ${car1}  wins!`)
        else if (position2 > position1 && position2 > position3)
            console.log(`\n ${car2}  wins!`)
        else console.log(`\n ${car3}  wins!`)
    }

},100) */




/*




class Vehicle {
    constructor(icon) {
        this.icon = icon
        this.position = 0
        this.count = 0
    }

    goForward(maxSteps, maxLength) {
        const steps = Math.round(Math.random() * maxSteps)
        this.count += steps
        this.position += steps
        if (this.position > maxLength) this.position -= maxLength
        console.log(`${' '.repeat(this.position)}${this.icon} (${this.count})`)
    }
}

const thief = new Vehicle('🚘')
const police = new Vehicle('🚔')
const taxi = new Vehicle('🚖')
const bus = new Vehicle('🚍')

const goal = 50
const maxLength = 110
const maxSteps = 5

const interval = setInterval(() => {
    console.clear()

    thief.goForward(maxSteps, maxLength)
    police.goForward(maxSteps, maxLength)
    taxi.goForward(maxSteps, maxLength)
    bus.goForward(maxSteps, maxLength)

    if (thief.position >= goal || police.position >= goal || taxi.position >= goal || bus.position >= goal) {
        clearInterval(interval)

        const reached = []

        if (thief.position >= goal)
            reached.push(thief)

        if (police.position >= goal)
            reached.push(police)

        if (taxi.position >= goal)
            reached.push(taxi)

        if (bus.position >= goal)
            reached.push(bus)

        if (reached.length === 1)
            console.log(`${reached[0].icon} wins`)
        else {
            debugger
            console.log(`${reached.map(vehicle => vehicle.icon).join(' ')} tie`)
        }
    }
}, 100)




*/
