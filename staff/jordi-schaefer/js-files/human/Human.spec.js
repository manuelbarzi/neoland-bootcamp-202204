describe('Human', () => {
    it('should construct a human', () => {
        const h = new Human // creo un nuevo humano, vacio porque no le paso nada

        expect(h instanceof Human).toBe(true) // comprueba que el humano sea de tipo humano
        expect(h.gender !== undefined).toBe(true) // comprueba que genero no es indefinido
        expect(h.gender === 'intersex' || h.gender === 'female' || h.gender === 'male').toBe(true)
    })


    it('should eat', () => {
        const h = new Human // h es un objeto de tipo human, sin especificar propiedades
        h.stomach = ['🥤'] // a la propiedad stomach del humano h, le pongo una bebida 

        h.eat('🍔') // llama la funcion eat sobre el humano h y le pasa comida

        expect(h.stomach[0]).toBe('🍔')
        expect(h.stomach[1]).toBe('🥤')

        h.eat('🥗')

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