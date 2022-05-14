function expect(value) {
	return {
		toBe(expected) { // closure
			if (value !== expected)
				console.error('expected ' + value + ' to be ' + expected)
		}
	}
}

let expectation = expect(10)

expectation.toBe(10)
expectation.toBe(11)

expectation = expect(true)

expectation.toBe(true)
expectation.toBe(false)

// VM10154:5 expected 10 to be 11
// VM10154:5 expected true to be false

// #2

function salute(from) {
	return function(to) {
		console.log(from + ': hello ' + to)
	}
}

const wendySalute = salute('Wendy')

wendySalute('Peter')
wendySalute('John')
// VM11210:3 Wendy: hello Peter
// VM11210:3 Wendy: hello John