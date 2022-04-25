{
console.log('TEST find')

    {
        console.log('CASE 1')

        const array1 = [5, 12, 8, 130, 44]

        //const found = array1.find(element => element > 10)
        const found = find(array1, element => element > 10)
        
        //console.log(found);
        // expected output: 12
        console.assert(found === 12)

    }

    {
        console.log('CASE 2')

        const cars = [
            {name: 'Seat Ibiza',color: 'yellow'},
            {name: 'Ford Fiesta',color: 'blue'},
            {name: 'Citroen AX',color: 'green'},
            {name: 'Seat Ibiza II',color: 'red'},
            {name: 'Ford Fiesta II',color: 'blue'},
            {name: 'Citroen AX II',color: 'red'},
            {name: 'Seat Ibiza III',color: 'red'},
            {name: 'Ford Fiesta III',color: 'red'},
            {name: 'Citroen AX III',color: 'yellow'},
        ]
        
        function isRed(car){
            //return car['color'] === 'red' Es una opción
            return car.color ==='red'
        }
        
        const car = find(cars, isRed)
        
        // const result = cars.find(isRed)

        console.assert(car === cars[3])


    }

    {
        console.log('CASE 3')

        const cars = [
            {name: 'Seat Ibiza',color: 'yellow'},
            {name: 'Ford Fiesta',color: 'blue'},
            {name: 'Citroen AX',color: 'green'},
            {name: 'Seat Ibiza II',color: 'red'},
            {name: 'Ford Fiesta II',color: 'grey'},
            {name: 'Citroen AX II',color: 'red'},
            {name: 'Seat Ibiza III',color: 'red'},
            {name: 'Ford Fiesta III',color: 'red'},
            {name: 'Citroen AX III',color: 'yellow'},
        ]
        
        function isBlack(car){
            //return car['color'] === 'red' Es una opción
            return car.color ==='black'
        }
        
        const car = find(cars, isBlack)
        
        // const result = cars.find(isBlack)

        console.assert(car === undefined)


    }


















}
