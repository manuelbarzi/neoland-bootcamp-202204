describe('map', function () {
    
    const array = [1,2,3,4,5,6]

    test('returns new array with each element summed by 5', function(){

        const newArray = map(array, function(element) {
            return element + 5
        })
    
        expect(newArray[0]).toBe(6)
        expect(newArray[1]).toBe(7)
        expect(newArray[2]).toBe(8)
        expect(newArray[3]).toBe(9)
        expect(newArray[4]).toBe(10)
        expect(newArray[5]).toBe(11)

    })

    test('returns new array with each element multiplied by 2', function(){

        const newArray = map(array, function(element) {
            return element * 2
        })
    
        expect(newArray[0]).toBe(2)
        expect(newArray[1]).toBe(4)
        expect(newArray[2]).toBe(6)
        expect(newArray[3]).toBe(8)
        expect(newArray[4]).toBe(10)
        expect(newArray[5]).toBe(12)

    })

    test('returns new array with dog ages, human age * 7', function(){

        const dogAges = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        
        function fromDogToHumanAge(dogAge) {
            return dogAge * 7
        }
        
        const humanAges = map(dogAges, fromDogToHumanAge)
        
        const expectedAges = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140]
    
        expect(dogAges.length).toBe(humanAges.length)
        expect(humanAges[0]).toBe(7)
        expect(humanAges[1]).toBe(14)
        expect(humanAges[2]).toBe(21)
        expect(humanAges[3]).toBe(28)
        expect(humanAges[4]).toBe(35)
        expect(humanAges[5]).toBe(42)
        expect(humanAges[6]).toBe(49)
        expect(humanAges[7]).toBe(56)
        expect(humanAges[8]).toBe(63)
        expect(humanAges[9]).toBe(70)
        expect(humanAges[10]).toBe(77)
        expect(humanAges[11]).toBe(84)
        expect(humanAges[12]).toBe(91)
        expect(humanAges[13]).toBe(98)
        expect(humanAges[14]).toBe(105)
        expect(humanAges[15]).toBe(112)
        expect(humanAges[16]).toBe(119)
        expect(humanAges[17]).toBe(126)
        expect(humanAges[18]).toBe(133)
        expect(humanAges[19]).toBe(140)

    })

    test('returns new array to calculate volume of a box', function(){

        const boxes = [
            { w: 10, h: 10, d: 10 },
            { w: 20, h: 20, d: 20 },
            { w: 5, h: 5, d: 5 }
        ]
        
        const calculateVolume = box => {
            return box.w * box.h * box.d   
        }
        
        const volumes = map(boxes, calculateVolume)
        
        const expectedVolumes = [1000, 8000, 125]
        
        expect(volumes.length).toBe(expectedVolumes.length)
        expect(volumes[0]).toBe(1000)
        expect(volumes[1]).toBe(8000)
        expect(volumes[2]).toBe(125)

    })

})