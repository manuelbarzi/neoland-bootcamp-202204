describe('CEO', function (){
    const ceo = new CEO('Jeff Bezos', 'jeffbezos@gmail.com', 'SM123456', 'ESP234567', new Date(1970, 4, 16))

    expect(ceo instanceof Worker)
    expect(ceo.name).toBe('Jeff Bezos')
    expect(ceo.email).toBe('jeffbezos@gmail.com')
    expect(ceo.socialSecurityNumber).toBe('SM123456')
    expect(ceo.id).toBe('ESP234567')
    expect(ceo.birthDate.getFullYear()).toBe(1970)
    expect(ceo.birthDate.getMonth()).toBe(4)
    expect(ceo.birthDate.getDate()).toBe(16)
    expect(ceo.status).toBe('pause')

})
it('should work', function(){
    const ceo = new CEO('Jeff Bezos', 'jeffbezos@gmail.com', 'SM123456', 'ESP234567', new Date(1970, 4, 16))

    ceo.work()

    expect(ceo.status).toBe('working')
})
it('should break', function(){
    const ceo = new CEO('Jeff Bezos', 'jeffbezos@gmail.com', 'SM123456', 'ESP234567', new Date(1970, 4, 16))

    ceo.break()

    expect(ceo.status).toBe('pause')
})
it('should be travelling', function(){
    const ceo = new CEO('Jeff Bezos', 'jeffbezos@gmail.com', 'SM123456', 'ESP234567', new Date(1970, 4, 16))

    ceo.travel()

    expect(ceo.status).toBe('travelling')
})
it('should manage the entire company', function(){
    const ceo = new CEO('Jeff Bezos', 'jeffbezos@gmail.com', 'SM123456', 'ESP234567', new Date(1970, 4, 16))

    ceo.manage()

    expect(ceo.status).toBe('managing the intire company')
})

