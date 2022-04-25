//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

describe('shift', () => {
	test('extracts first element from non-empty array', () => {
		const nums = [1, 2, 3]

		const num = shift(nums)

		expect(num).toBe(1)
		expect(nums.length).toBe(2)
		expect(nums[0]).toBe(2)
		expect(nums[1]).toBe(3)
	})

	test('returns undefined on empty array', () => {
		const nums = []

		const num = shift(nums)

		expect(num).toBe(undefined)
	})
})