function Vehicle(brand, model, color, year, type) {
    this.brand = brand
    this.model = model
    this.color = color
    this.year = year
    this.type = type

    this.status = ''
}

Vehicle.prototype.start = function() {
    this.status = '💨'
}

Vehicle.prototype.stop = function() {
    this.status = ''
}

// 'turism', 'suv', 'truck', 'moto', 'scooter'

const v = new Vehicle('ford', 'fiesta', 'gray', 2005, 'turism')
//Vehicle {brand: 'ford', model: 'fiesta', color: 'gray', year: 2005, type: 'turism'}

function Turism(brand, model, color, year) {
    
}

const t = new Turism('ford', 'fiesta', 'gray', 2005)

console.log(t instanceof Turism) // true
console.log(t instanceof Vehicle) // true