
describe('find', () => {
    test('should returns the first element in the array that satisfies function', () => {
        const numeros = [1, 2, 3, 4, 5, 6]
        
        const result = find(numeros, function(numero) {
            return numero > 3
        })
        expect(result).toBe(4)
    })

    test('should should returns the first element in the array that satisfies function', () => {

        const numeros = [11, 32, 83, 40, 2, 16]

        const result = find(numeros, function(numero) {
            return numero < 3
        })
        expect(result).toBe(2)
    })

    test('should should returns the first element in the array that satisfies function', () => {

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

        const car = find(cars, isRed)

        expect(car).toBe(cars[3])

    })

    test('should should returns the first element in the array that satisfies function', () => {

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
            return car.color === 'black'
        }

        const car = find(cars, isRed)

        expect(car).toBe(undefined)
    })
})


