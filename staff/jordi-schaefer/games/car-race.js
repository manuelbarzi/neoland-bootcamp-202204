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