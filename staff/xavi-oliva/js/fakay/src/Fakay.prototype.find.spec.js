describe('Fakay.prototype.find', function () {

    it('find the element that matches callback condition. Element > 10', function(){

        const nums = new Fakay (5, 12, 8, 130, 44)
        
        const found = nums.find(element => element > 10)

        expect(found).toBe(12)

    })

    it('find the element that matches callback condition on property. Color === red', function(){

        const cars = new Fakay (
            { name: 'Seat Ibiza', color: 'yellow' },
            { name: 'Ford Fiesta', color: 'blue' },
            { name: 'Citroen AX', color: 'green' },
            { name: 'Seat Ibiza 2', color: 'red' },
            { name: 'Ford Fiesta 2', color: 'blue' },
            { name: 'Citroen AX 2', color: 'red' },
            { name: 'Seat Ibiza 3', color: 'red' },
            { name: 'Ford Fiesta 3', color: 'red' },
            { name: 'Citroen AX 3', color: 'yellow' }
        )

        function isRed(car) {
            //return car['color'] === 'red'
            return car.color === 'red'
        }

        const car = cars.find(isRed)

        expect(car).toBe(cars[3])

    })

    it('If cannot find the object that matches callback condition returns undefined', function(){

        const cars = new Fakay (
            { name: 'Seat Ibiza', color: 'yellow' },
            { name: 'Ford Fiesta', color: 'blue' },
            { name: 'Citroen AX', color: 'green' },
            { name: 'Seat Ibiza 2', color: 'red' },
            { name: 'Ford Fiesta 2', color: 'blue' },
            { name: 'Citroen AX 2', color: 'red' },
            { name: 'Seat Ibiza 3', color: 'red' },
            { name: 'Ford Fiesta 3', color: 'red' },
            { name: 'Citroen AX 3', color: 'yellow' }
        )

        function isBlack(car) {
            return car.color === 'black'
        }

        const car = cars.find(isBlack)

        expect(car).toBe(undefined)

    })

})