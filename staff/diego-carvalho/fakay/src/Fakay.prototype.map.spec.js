describe('Faka.prototype.map', function(){
    it('divide all numbers per 2', function () {
        const num = new Fakay (10, 20, 40, 30)

        const funcionSecretPassword = num.map(function (number) {
            return number / 2
        })

        expect(funcionSecretPassword[0]).toBe(5)
        expect(funcionSecretPassword[1]).toBe(10)
        expect(funcionSecretPassword[2]).toBe(20)
        expect(funcionSecretPassword[3]).toBe(15)
    })
    
    it('maps boxes into volumes', function() {
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