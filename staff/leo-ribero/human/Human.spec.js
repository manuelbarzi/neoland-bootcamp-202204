describe('Human', () => {
	it('should construct a human', () => {
		const h = new Human// nuevo objeto

		expect(h instanceof Human).toBe(true)
		expect(h.gender !== undefined).toBe(true)
		expect(h.gender === 'intersex' || h.gender === 'female' || h.gender === 'male').toBe(true)
	})

	it('should eat', () => {
		const h = new Human // instanciamos un nuevo objeto de tipo Human en "h"

		h.stomach = ['🥤']// un array con un valor en posicion 0
		// const h2 = new Human
		// console.log(h2.stomach) // expected output []
		h.eat('🍔')// añade el parametro, en este caso "meal", ver linia 14 Human.js
		// en nuestro obj h hemos invocado el método eat

		expect(h.stomach[0]).toBe('🍔')
		expect(h.stomach[1]).toBe('🥤')
		// Espero que el índice 0 del array stomach, que es una propiedad de mi objeto h, sea igual a un string con una hamburguesa
		
		h.eat('🥗')
		// en nuestro obj h hemos invocado el método eat y nos pasa por parámetro, una ensalada
		expect(h.stomach[0]).toBe('🥗')
		expect(h.stomach[1]).toBe('🍔')
		expect(h.stomach[2]).toBe('🥤')

		h.eat('🌭')

		expect(h.stomach[0]).toBe('🌭')
		expect(h.stomach[1]).toBe('🥗')
		expect(h.stomach[2]).toBe('🍔')
		expect(h.stomach[3]).toBe('🥤')
	})

	it('should drink', () => {
		const h = new Human

		h.stomach = ['🍔']

		h.drink('🥤')

		expect(h.stomach[0]).toBe('🥤')
		expect(h.stomach[1]).toBe('🍔')

		h.drink('🍼')

		expect(h.stomach[0]).toBe('🍼')
		expect(h.stomach[1]).toBe('🥤')
		expect(h.stomach[2]).toBe('🍔')
	})

	it('should poo', () => {
		const h = new Human

		h.stomach = ['🥤', '🥗', '🌭', '🍔']

		expect(h.poo()).toBe('💩')
		expect(h.stomach.length).toBe(1)
		expect(h.stomach[0]).toBe('🥤')
	})

	it('should pee', () => {
		const h = new Human

		h.stomach = ['🥤', '🥗', '🌭', '🍔']

		expect(h.pee()).toBe('💦')
		expect(h.stomach.length).toBe(3)
		expect(h.stomach[0]).toBe('🥗')
		expect(h.stomach[1]).toBe('🌭')
		expect(h.stomach[2]).toBe('🍔')
	})
})