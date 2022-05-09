describe('Fakay.prototype.unshift', () => {
    it('Should add one or more elements to the beginning of an instance and returns the new length of the instance', () => {
        const nums = new Fakay ()
        nums[0] = 1
        nums[1] = 2
        nums[2] = 3
        nums.length = 3
        
        const length = nums.unshift(4)
        
        expect(length).toBe(4)
        expect(nums.length).toBe(4)
        expect(nums[0]).toBe(4)
        expect(nums[1]).toBe(1)
        expect(nums[2]).toBe(2)
        expect(nums[3]).toBe(3)
    })
    
    it('Should add one or more elements to the beginning of an instance and returns the new length of the instance', () => {
        const nums = new Fakay ()
        nums[0] = 1
        nums[2] = 2
        nums[3] = 3
        nums.length = 3

        const length = nums.unshift(4, 5)

        expect(length).toBe(5)
        expect(nums.length).toBe(5)
        expect(nums[0]).toBe(4)
        expect(nums[1]).toBe(5)
        expect(nums[2]).toBe(1)
        expect(nums[3]).toBe(2)
        expect(nums[4]).toBe(3)
    })

    // it('...empty instance', () => {
        
    // })
})