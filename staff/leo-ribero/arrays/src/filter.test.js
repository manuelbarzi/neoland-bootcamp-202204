{
    console.log('TEST filter')

    const people = [
        {name: 'Frank', age: 50, gender: 'm'},
        {name: 'Thor', age: 32, gender: 'm'},
        {name: 'Anna', age: 26, gender: 'f'},
        {name: 'Luca', age: 32, gender: 'm'},
        {name: 'Marc', age: 36, gender: 'm'},
        {name: 'Lucia', age: 32, gender: 'f'},
      ]  

    {
        console.log('CASE 1')

        function thirtyTwoPeople(person){
            return person.age === 32
          }
        // const thirtyTwoList = people.filter(thirtyTwoPeople)
        // AQUI ES DONDE APLICO LA FUNCIÓN
        const thirtyTwoList = filter(people, thirtyTwoPeople)   

        console.assert(thirtyTwoList[0] === people[1] )
        console.assert(thirtyTwoList[1] === people[3] )
        console.assert(thirtyTwoList[2] === people[5] )
        
    }      
    {
        console.log('CASE 2')

        const containsAletter = person => person.name.includes('a')

        // const peopleWithA = people.filter(containsAletter)
        // AQUI ES DONDE APLICO LA FUNCIÓN
        const peopleWithA = filter(people, containsAletter)
        

        console.assert(peopleWithA[0] === people[0])
        console.assert(peopleWithA[1] === people[2])
        console.assert(peopleWithA[2] === people[3])
        console.assert(peopleWithA[3] === people[4])
        console.assert(peopleWithA[4] === people[5])




    }
      








}