describe('Worker', () => {
    it('should build a Worker', () => {
        const worker = new Worker('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))
//declaro una const que se llama worker que tiene las propiedades de arriba y son las que pasaré en la función de worker
//Worker función constructora que espera varios parametros y al ser constructora la podemos hacer nueva.

        expect(worker instanceof Worker).toBe(true) //worker del tipo worker (instancia de worker). verdadero.
        expect(worker.name).toBe('Peter Pan')
        expect(worker.email).toBe('peter@pan.com')
        expect(worker.socialSecurityNumber).toBe('SEC-123123123')
        expect(worker.id).toBe('ID-123123123')
        expect(worker.birthDate.getFullYear()).toBe(2000)
        expect(worker.birthDate.getMonth()).toBe(11)
        expect(worker.birthDate.getDate()).toBe(31)
        /*añadir*/ expect(worker.status).toBe('pause')/*por defecto es pausa*/
    })
//le damos titulo al ejercicio 'should work' y le damos la función. Esta función contiene la declaración de un nuevo worker con
//sus propiedades, la función work que le empleamos a worker y el resultado esperadoo en el que el estado del worker es trabajando

    it('should work', () => {
        const worker = new Worker('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        worker.work() //metodo o función asociada al prototipo worker. cuando la llamo pasa a ser working
                        //objeto.propiedad (formato de método)

        expect(worker.status).toBe('working')
    }) //¿cual deberia ser el status por defecto? poner en propiedades. ajustar en el test


//le damos titulo al ejercicio 'should break' y le damos la función. Esta función contiene la declaración de un nuevo worker con
//sus propiedades, la función break que le empleamos a worker y el resultado esperadoo en el que el estado del worker es break

    it('should break', () => {
        const worker = new Worker('Peter Pan', 'peter@pan.com', 'SEC-123123123', 'ID-123123123', new Date(2000, 11, 31))

        worker.break()

        expect(worker.status).toBe('pause')
    })
})

