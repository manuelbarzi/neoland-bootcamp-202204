// slice (array, start, end) returns a copy starting at start index till end index

describe('slice', function(){

    test('start index', function(){
        const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        const result = slice(fruits, 2)

        expect(result.length).toBe(3)
        expect(result[0]).toBe("Lemon")
        expect(result[1]).toBe("Apple")
        expect(result[2]).toBe("Mango")
    })

    test('negative index', function(){
        const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        const result = slice(fruits, -2)

        expect(result.length).toBe(2)

        expect(result[0]).toBe("Apple")
        expect(result[1]).toBe("Mango")
    })

    test('with positive start and negative end indexes', function(){
        const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        const result = slice(fruits, 1, -2)

        expect(result.length).toBe(2)

        expect(result[0]).toBe("Orange")
        expect(result[1]).toBe("Lemon")
    })
})

