//espero que el nombre sea igual que el nuevo nombre

describe('updateUserName', () => {
    it('succeeds when user exists and new name', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserName('chocolater', 'tupac', error => {
            expect(error).toBeNull()

            const user = db.users.find(elemento => elemento.username === 'chocolater')
            //buscar el elemento que cumpla la condición haya entre parentesis, usuario(con sus propiedades) con su propiedad username chocolater

            expect(user.name).toBe('tupac') //tenemos que acceder a la propiedad del nombre. user.name
        })

        db.users.length = 0
    })
    it('fails when user dont exist', () => {
        db.users.length = 0

        db.users.push(new User('Choco Later', 'chocolater', '123123123'))

        updateUserName('patataInexistente', 'tupac', error => {
            expect(error).toBeDefined()
            expect(error.message).toBe(`user dont exist`)
            expect(error).toBeInstanceOf(Error)

            const user = db.users.find(elemento => elemento.username === 'chocolater')
            //buscar el elemento que cumpla la condición haya entre parentesis, usuario(con sus propiedades) con su propiedad username chocolater
            
            expect(user.name).toBe('chocolater') //tenemos que acceder a la propiedad del nombre. user.name
        })

        db.users.length = 0
    })
})




