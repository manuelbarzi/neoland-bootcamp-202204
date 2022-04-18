{
    console.log('TEST some')

    const orderedNum = [1, 2, 3, 4, 5];

    {
        console.log('CASE 1')

        const n = some(orderedNum, function(element){
            return element % 2 === 0
        })
        
        console.assert(n === true)
    }

    const element = ['fire', 'air', 'water']
    {
        console.log('CASE 2')

        const n = some(element, function(elem){
            if(elem.includes('t'))
            return true
        })
        console.assert(n === true)
    }

    {
        console.log('CASE 3')

        const n = some(element, function(elem){
            if(elem.includes('z'))
            return true
        })
        console.assert(n === false)
    }
}