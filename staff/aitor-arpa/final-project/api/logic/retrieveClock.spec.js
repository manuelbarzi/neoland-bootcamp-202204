

describe('RetrieveClock', () => {
    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
    let userWork
    beforeEach(() => {
        return Promise.all([User.deleteMany(), Clock.deleteMany()])
            .then(() => {
                              
                userWork = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s' })
                return userWork.save()

            })
    })

})