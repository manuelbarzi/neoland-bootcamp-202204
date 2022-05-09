describe('Fakay.prototype.map', function () {
    
    
    it('should return new instance with each element summed by 5', function(){
        const nums = new Fakay (1,2,3,4,5,6)
        
        const result = nums.map(function(element) {
            return element + 5
        })
    
        expect(result[0]).toBe(6)
        expect(result[1]).toBe(7)
        expect(result[2]).toBe(8)
        expect(result[3]).toBe(9)
        expect(result[4]).toBe(10)
        expect(result[5]).toBe(11)
        
    })
    
    it('should return new instance with each element multiplied by 2', function(){
        const nums = new Fakay (1,2,3,4,5,6)
        
        const result = nums.map(function(element) {
            return element * 2
        })
    
        expect(result[0]).toBe(2)
        expect(result[1]).toBe(4)
        expect(result[2]).toBe(6)
        expect(result[3]).toBe(8)
        expect(result[4]).toBe(10)
        expect(result[5]).toBe(12)

    })

    it('maps dog to human ages', () => {
        const dogAges = new Fakay(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)

        function fromDogToHumanAge(dogAge) {
            return dogAge * 7
        }

        const humanAges = dogAges.map(fromDogToHumanAge)

        const expectedAges = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140]

        expect(humanAges).toBeInstanceOf(Fakay)
        expect(humanAges.length).toBe(expectedAges.length)

        for (let i = 0; i < expectedAges.length; i++)
            expect(expectedAges[i]).toBe(humanAges[i])
    })

    it('maps boxes into volumes', () => {
        const boxes = new Fakay(
            { w: 10, h: 10, d: 10 },
            { w: 20, h: 20, d: 20 },
            { w: 5, h: 5, d: 5 }
        )

        const calculateVolume = box => {
            return box.w * box.h * box.d
        }

        const volumes = boxes.map(calculateVolume)

        const expectedVolumes = [1000, 8000, 125]

        // expect(volumens instanceof Fakay).toBeTruthy() (= .toBe(true))
        expect(volumes).toBeInstanceOf(Fakay)
        expect(volumes.length).toBe(expectedVolumes.length)

        for (let i = 0; i < volumes.length; i++)
            expect(volumes[i]).toBe(expectedVolumes[i])
    })

})