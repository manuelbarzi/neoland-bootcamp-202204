
describe('Fakay.prototype.filter', function(){
  it('Return all elements that pass test', function(){
    const ages = new Fakay(3, 89, 90, 40, 6)


    function filterAges(ages){
        return ages > 18
    }
    
    const over18 = ages.filter(filterAges)

    console.log(over18, 666)



    // expect(over18[0]).toBe(89)
    // expect(over18[1]).toBe(90)
    // expect(over18[2]).toBe(40)
    expect(over18.length).toBe(3)

  })

})