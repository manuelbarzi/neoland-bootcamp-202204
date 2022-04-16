console.log ('TEST every')


{
    console.log ('case1')

    const array = [ 'pc','pc','pc']

    const result = every(array, function(element) {
        return element === 'pc'
    })

    console.assert(result === true)

}