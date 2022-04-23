
describe('Fakay find', () => {
    it('should returns the first element in the array that satisfies function', () => {
        const numeros = [1, 2, 3, 4, 5, 6]
        
        const result = numeros.find(function(numero) {
            return numero > 3
        })
        expect(result).toBe(4)
    })

    it('should should returns the first element in the array that satisfies function', () => {

        const numeros = [11, 32, 83, 40, 2, 16]

        const result = numeros.find(function(numero) {
            return numero < 3
        })
        console.log(result)
        expect(result).toBe(2)
    })

    it('should should returns the first element in the array that satisfies function', () => {

        const cars = [
            { name: 'Seat Ibiza', color: 'yellow' },
            { name: 'Ford Fiesta', color: 'blue' },
            { name: 'Citroen AX', color: 'green' },
            { name: 'Seat Ibiza 2', color: 'red' },
            { name: 'Ford Fiesta 2', color: 'blue' },
            { name: 'Citroen AX 2', color: 'red' },
            { name: 'Seat Ibiza 3', color: 'red' },
            { name: 'Ford Fiesta 3', color: 'red' },
            { name: 'Citroen AX 3', color: 'yellow' }
        ]

        function isRed(car) {
            //return car['color'] === 'red'
            return car.color === 'red'
        }

        const car = cars.find(isRed)

        expect(car).toBe(cars[3])

    })

    it("should It should return undefined if it doesn't find the element", () => {

        const cars = [
            { name: 'Seat Ibiza', color: 'yellow' },
            { name: 'Ford Fiesta', color: 'blue' },
            { name: 'Citroen AX', color: 'green' },
            { name: 'Seat Ibiza 2', color: 'red' },
            { name: 'Ford Fiesta 2', color: 'blue' },
            { name: 'Citroen AX 2', color: 'red' },
            { name: 'Seat Ibiza 3', color: 'red' },
            { name: 'Ford Fiesta 3', color: 'red' },
            { name: 'Citroen AX 3', color: 'yellow' }
        ]

        function isBlack(car) {
            //return car['color'] === 'red'
            return car.color === 'black'
        }

        const car = cars.find(isBlack)

        expect(car).toBe(undefined)
    })
})


