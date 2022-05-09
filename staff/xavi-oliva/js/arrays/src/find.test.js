describe('find', function () {

    test('find the element that matches callback condition. Element > 10', function(){

        const nums = [5, 12, 8, 130, 44]
        
        const found = find(nums, element => element > 10)

        expect(found).toBe(12)

    })

    test('find the element that matches callback condition on property. Color === red', function(){

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

    test('If cannot find the object that matches callback condition returns undefined', function(){

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

        expect(car).toBe(undefined)

    })

})