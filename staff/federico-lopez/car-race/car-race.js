class Car {
    constructor(name, icon) {
        this.name = name
        this.icon = icon
        this.steps = 0
    }

    goForward = (maxStep) => {
        this.steps += Math.round(Math.random() * maxStep)
        console.log(`${' '.repeat(this.steps)}${this.icon} (${this.steps})`)
    }
}

const cars = []
cars.push(new Car('thief', '🚘'))
cars.push(new Car('police', '🚔'))
cars.push(new Car('bus', '🚍'))
cars.push(new Car('taxi', '🚖'))

const interval = setInterval(() => {
    console.clear()

    cars.forEach(car => car.goForward(5))

    const winners = cars.filter(car => car.steps >= 100)

    if (winners.length === 1) {
        console.log(`${winners[0].name} wins`)
        clearInterval(interval)

    } else if (winners.length > 1) {
        console.log('TIED RACE!!')
        winners.forEach(car => console.log(`${car.name} wins`))
        clearInterval(interval)
    }
    
}, 100)