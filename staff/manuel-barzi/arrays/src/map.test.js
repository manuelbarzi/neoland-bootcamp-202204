{
    console.log('TEST map')

    {
        console.log('CASE 1')

        const dogAges = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    
        function fromDogToHumanAge(dogAge) {
            return dogAge * 7
        }
    
        const humanAges = map(dogAges, fromDogToHumanAge)
    
        const expectedAges = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140]

        console.assert(humanAges.length === expectedAges.length)

        for (let i = 0; i < expectedAges.length; i++)
            console.assert(expectedAges[i] === humanAges[i])
    }

    {
        console.log('CASE 2')

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

        console.assert(volumes.length === expectedVolumes.length)

        for (let i = 0; i < volumes.length; i++)
            console.assert(volumes[i] === expectedVolumes[i])
    }
}