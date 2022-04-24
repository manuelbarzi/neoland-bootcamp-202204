describe('Human', () => {
    it('should construct a human', () => {
        const h = new Human //creo un nuevo humano vacio porque no le paso nada
                            //función constructora= molde
                            //h objeto del tipo human
        expect(h instanceof Human).toBe(true) // compruebo que el humano sea del tipo humano. h instancia del objeto
        expect(h.gender !== undefined).toBe(true) //compruebo que el genero no es indefinido (!== QUIERE DECIR QUE NO)
        expect(h.gender === 'intersex' || h.gender === 'female' || h.gender === 'male').toBe(true)

    })

    it('should eat', () => {
        const h = new Human // creo un nuevo humano vacio porque no le paso nada

        h.stomach = ['🥤'] //a la propiedad stomach del humano h le pongo una bebida]

        h.eat('🍔') //parentesis () es +o- function. Una función ejectua. Llamo a la función comer sobre el humano h y le envio la hamburguesa

        expect(h.stomach[0]).toBe('🍔') //comprobamos que en el stomach tenemos en primera posición hamburguesa
        expect(h.stomach[1]).toBe('🥤') //en segunda posición batidito

        //las siguientes funciones que ejecuta eat, serán igual. drink tmbien

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
        const h = new Human        //crea nuevo humano h

        h.stomach = ['🥤', '🥗', '🌭', '🍔'] //le llena el estomago

        expect(h.poo()).toBe('💩') //la función poo devuelve caca.
        expect(h.stomach.length).toBe(1) //esperamos que la longitud de stomach sea 1
        expect(h.stomach[0]).toBe('🥤') // esperamos que solo quede batidito
    })

    it('should pee', () => {
        const h = new Human

        h.stomach = ['🥤', '🥗', '🌭', '🍔']

        expect(h.pee()).toBe('💦') //la función pee devuelve caca.
        expect(h.stomach.length).toBe(3) //esperamos que la longitud de stomach sea 3
        expect(h.stomach[0]).toBe('🥗') // esperamos que quede ensalada, hotdog y hamburguesa
        expect(h.stomach[1]).toBe('🌭')
        expect(h.stomach[2]).toBe('🍔')
    })
})