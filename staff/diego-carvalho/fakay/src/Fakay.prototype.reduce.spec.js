describe('Fakay.protopy.reduce', function () {
    it('sum all the elements', function () {

        let sum = new Fakay(1, 2, 3, 4)

        let sumWithoutInitial = sum.reduce(
            (previousValue, currentValue) => previousValue + currentValue);

        expect(sumWithoutInitial).toBe(10);


    })

    it('sum using initial value', function () {

        const sum1 = new Fakay(1, 2, 3, 4)

        const sumWithInitial = sum1.reduce((previousValue, currentValue) => previousValue + currentValue, 2)

        expect(sumWithInitial).toBe(12)

    })



})