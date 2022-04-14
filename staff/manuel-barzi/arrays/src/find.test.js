{
    console.log('TEST find')

    {
        console.log('CASE 1')

        const nums = [5, 12, 8, 130, 44]

        const found = find(nums, element => element > 10)

        console.assert(found === 12)
    }

    {
        console.log('CASE 2')

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

        console.assert(car === cars[3])
    }

    {
        console.log('CASE 3')

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
            return car.color === 'black'
        }

        const car = find(cars, isBlack)

        console.assert(car === undefined)
    }
}