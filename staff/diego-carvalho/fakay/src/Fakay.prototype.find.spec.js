describe('Fakay.prototype.find', function () {
    it('finding a number bigger than 12', function () {
        const obj1 = new Fakay (5, 12, 8, 130, 44)
        // expected output: 130
        //here is the function that will check if every value inside of the array is bigger than 12
        function isBiggerThan12(value) {
            if (value > 12) {
                return true //if every value is bigger than 1 it will return true
            }
        }
        obj1.find(isBiggerThan12)//here:function find with two elements(array and finder)

        expect(obj1[3]).toBe(130)//the arra1[3] === 130. True outprint 130 

    })
    it('finding a number smaller than 1', function () {
        const obj2 = new Fakay (5, 12, 8, 130, 44)
        
        function isSmallerThan1(value) {
            if (value < 1) {
                return true 
            }
        }
        obj2.find(isSmallerThan1)

        expect(false).toBe(false)

    })
    it('finding Diegos name', function () {
        const obj3 = new Fakay ('Miguel', 'Diego', 'Jordi', 'Paula')
        
        function findingDiego(value) {
            if (value === 'Diego') {
                return true 
            }
        }
        obj3.find(findingDiego)

        expect(true).toBe(true)
        expect(obj3[1]).toBe('Diego')

    })
})