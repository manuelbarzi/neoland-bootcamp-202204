describe('flat', function() {
    it(' flating array', function() {
     const numbers1 = new Fakay (0, 1, 2, new Fakay(3, 4))

     let result1 = numbers1.flat() // expected output: [0, 1, 2, 3, 4]

     expect(result1.length).toBe(5)
     expect(result1[0]).toBe(0)
     expect(result1[1]).toBe(1)
     expect(result1[2]).toBe(2)
     expect(result1[3]).toBe(3)
     expect(result1[4]).toBe(4)

    })
    
    test(' flating multiple array', function() {

     const array2 = [0, 1, 2, [[[3, 4]]]]

     const result2 = flat(array2, 2) // expected output: [0, 1, 2, [3, 4]]

     expect(result2.length).toBe(4)
     expect(result2[0]).toBe(0)
     expect(result2[1]).toBe(1)
     expect(result2[2]).toBe(2)
     expect(result2[3[0]]).toBe(3)
     expect(result2[3[1]]).toBe(4)

    })
    

    test(' flating more multiple elements', function() {

     const array3 = [0, [1, 2], 3, 4, [[[[3, 4]], 5]]]

     const result3= flat(array3, 3)

     expect(result3.length).toBe(7)
     expect(result3[0]).toBe(0)
     expect(result3[1]).toBe(1)
     expect(result3[2]).toBe(2)
     expect(result3[3]).toBe(3)
     expect(result3[4]).toBe(4)
     expect(result3[5[0]]).toBe(0)
     expect(result3[5[1]]).toBe(1)
     expect(result3[6]).toBe(5)

    })

    
})



