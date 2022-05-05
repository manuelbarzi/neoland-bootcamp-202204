describe(' flat', function(){
    test('returns long element', function () {
        const nums1 = [0, 1, 2, [3, 4]]

        let nums = flat(nums1) 

        expect(nums.length).toBe(5)
        expect(nums[0]).toBe(0)
        expect(nums[1]).toBe(1)
        expect(nums[2]).toBe(2)
        expect(nums[3]).toBe(3)
        expect(nums[4]).toBe(4)
    })
})