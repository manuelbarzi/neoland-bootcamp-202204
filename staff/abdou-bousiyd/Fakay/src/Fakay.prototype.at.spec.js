
describe('Fake at', function() {
    const nums = new Fakay(5, 12, 8, 130, 44)
    // console.log(nums, 888)
    it('positive index', () => {
        const result = nums.at(2)
        expect(result).toBe(8)
    })

    it('negative index', function() { 
        const foo = new Fakay('a', 'c', 'b','e','c')
        const index = -2
        const res1 = foo.at(index)
        expect(res1).toBe('e')
    })

    it('should returns element from position', function() { 
        const foo = new Fakay('a', 'c', 'b','e','c')
        const index = 2
        const res1 = foo.at(index)
        expect(res1).toBe('b')
    })

})

