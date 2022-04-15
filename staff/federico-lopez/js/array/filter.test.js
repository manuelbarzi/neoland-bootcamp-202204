console.log('TEST FILTER')

{

    console.log('CASE 1')

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = filter(words, function (word) {
        return word.length > 6
    }
    )

    console.assert(result[0] === "exuberant")
    console.assert(result[1] === "destruction")
    console.assert(result[2] === "present")

}

{
    console.log('CASE 2')

    const words = ['spray', 'limit', 'elite', 'limit', 'destruction', 'present'];

    const result = filter(words, function (word) {
        return word === 'limit'
    }
    )

    console.assert(result[0] === "limit")
    console.assert(result[1] === "limit")
}

console.log('CASE 3')

const people = [
    { name: "Leo", edad: 50, gender: "m" },
    { name: "Aitor", edad: 32, gender: "m" },
    { name: "Jordi", edad: 30, gender: "m" },
    { name: "Manu", edad: 44, gender: "m" },
    { name: "Naty", edad: 37, gender: "f" },
    { name: "Paula", edad: 23, gender: "f" },
    { name: "Wendy", edad: 203, gender: "f" }
]

function moreThan30(person) {
    return person.edad > 30
}

const peopleAbove30 = filter(people, moreThan30)
// console.log(peopleAbove30)
console.assert(peopleAbove30.length === 5)
console.assert(peopleAbove30[0] === people[0])
console.assert(peopleAbove30[1] === people[1])
console.assert(peopleAbove30[2] === people[3])
console.assert(peopleAbove30[3] === people[4])
console.assert(peopleAbove30[4] === people[6])



console.log('CASE 4')

/*
const containsALetter = person => person.name.toLowerCase().includes("a")

    */

function containsALetter(person) {
    
    return person.name.toLowerCase().includes("a")
    
   /*
   return person.name.includes("a") || person.name.includes("A")
   */
}


const peopleWithA = filter(people, containsALetter)
// console.log(peopleWithA)



console.assert(peopleWithA.length === 4)
console.assert(peopleWithA[0] === people[1])
console.assert(peopleWithA[1] === people[3])
console.assert(peopleWithA[2] === people[4])
console.assert(peopleWithA[3] === people[5])