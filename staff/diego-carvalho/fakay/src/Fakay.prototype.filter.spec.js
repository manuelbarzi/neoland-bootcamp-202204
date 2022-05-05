describe('Fakay.prototype.filter ', function(){
    it('filter words with length more than 6', () => {

        const words = new Fakay ('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')

        const result = words.filter(function (word) {
            return word.length > 6;
        })

        expect(result[0]).toBe("exuberant")
        expect(result[1]).toBe("destruction")
        expect(result[2]).toBe("present")
     
    })

    it('filter word === \'limit\'', () => {

        const words = new Fakay ('spray', 'limit', 'elite', 'limit', 'destruction', 'present')

        const result = words.filter(function (word) {
            return word === 'limit'
        })

        expect(result[0]).toBe('limit')
        expect(result[1]).toBe('limit')

    })

    const people = new Fakay (
        { name: "Leo", edad: 50, gender: "m" },
        { name: "Aitor", edad: 32, gender: "m" },
        { name: "Jordi", edad: 30, gender: "m" },
        { name: "Manu", edad: 44, gender: "m" },
        { name: "Naty", edad: 37, gender: "f" },
        { name: "Paula", edad: 23, gender: "f" },
        { name: "Wendy", edad: 203, gender: "f" }
)

    function moreThan30(person) {
        return person.edad > 30;
    }

    function containsALetter(person) {
        return person.name.toLowerCase().includes("a");
    }

    it('filter array of objects', () => {

        const peopleAbove30 = people.filter(moreThan30);
        // console.log(peopleAbove30)
        expect(peopleAbove30.length).toBe(5);
        expect(peopleAbove30[0]).toBe(people[0]);
        expect(peopleAbove30[1]).toBe(people[1]);
        expect(peopleAbove30[2]).toBe(people[3]);
        expect(peopleAbove30[3]).toBe(people[4]);
        expect(peopleAbove30[4]).toBe(people[6]);

    })

    it('filter persons who contains a letter', () => {

        const peopleWithA = people .filter(containsALetter);

        expect(peopleWithA.length).toBe(4);
        expect(peopleWithA[0]).toBe(people[1]);
        expect(peopleWithA[1]).toBe(people[3]);
        expect(peopleWithA[2]).toBe(people[4]);
        expect(peopleWithA[3]).toBe(people[5]);

    })

})