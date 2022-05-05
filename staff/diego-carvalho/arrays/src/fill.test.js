describe('fill', function () {

    test('fill with 6 from position 2 until position 5', function () {
        const array1 = [1, 2, 3, 4, 5, 8, 7]

        fill(array1, 6, 2, 5)//array(array1),elemente(6),start(2) y end(5)

        // [1, 2, 6, 6, 6, 8, 7])

        expect(array1[0]).toBe(1)
        expect(array1[1]).toBe(2)
        expect(array1[2]).toBe(6)
        expect(array1[3]).toBe(6)
        expect(array1[4]).toBe(6)
        expect(array1[5]).toBe(8)
        expect(array1[6]).toBe(7)

    })

    test('fill with 6 from position 2 until to the last position ', function () {
        const array2 = [1, 2, 3, 4, 5, 6, 7]

        fill(array2, 6, 2)//array(array2),elemente(6),start(2) y end(until the end of array3)

        // [1, 2, 6, 6, 6, 6, 6])

        expect(array2[0]).toBe(1)
        expect(array2[1]).toBe(2)
        expect(array2[2]).toBe(6)
        expect(array2[3]).toBe(6)
        expect(array2[4]).toBe(6)
        expect(array2[5]).toBe(6)
        expect(array2[6]).toBe(6)

    })

    test('fill with 6 from position 0 until to seventh position ', function () {
        const array3 = [1, 2, 3, 4, 5, 6, 7]

        fill(array3, 6)//the function fill change all elements of the array3 to 6

        // [6, 6, 6, 6, 6, 6, 6])

        expect(array3[0]).toBe(6)
        expect(array3[1]).toBe(6)
        expect(array3[2]).toBe(6)
        expect(array3[3]).toBe(6)
        expect(array3[4]).toBe(6)
        expect(array3[5]).toBe(6)
        expect(array3[6]).toBe(6)

    })



})



