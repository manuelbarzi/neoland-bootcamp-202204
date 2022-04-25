describe('Fakay.prototype.unshift', function (){
    it('adds one or more elements to the beginning of an array and returns the new length of the array', function() {
        const nums = new Fakay (1, 2, 3)

        const length = nums.unshift(4)

     
        expect(nums.length).toBe(4)
        expect(nums[0]).toBe(4)
        expect(nums[1]).toBe(1)
        expect(nums[2]).toBe(2)
        expect(nums[3]).toBe(3)
    })

    it('adds one or more elements to the beginning of an array and returns the new length of the array', function (){
        const nums = new Fakay (1, 2, 3)

        const length = nums.unshift(4, 5)


        expect(nums.length).toBe(5)
        expect(nums[0]).toBe(4)
        expect(nums[1]).toBe(5)
        expect(nums[2]).toBe(1)
        expect(nums[3]).toBe(2)
        expect(nums[4]).toBe(3)
    })

  
})