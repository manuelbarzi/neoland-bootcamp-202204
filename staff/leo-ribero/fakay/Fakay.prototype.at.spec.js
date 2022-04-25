describe('Fakay.prototype.at', () => {

    it('should return the value on an index', () =>{

        const nums = new Fakay(5, 12, 8, 130, 44)

        // const result = at(nums, 2)
        const result = nums.at(2)
        expect(result).toBe(8)

    })

})