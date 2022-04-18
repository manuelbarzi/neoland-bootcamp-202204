console.log('TEST shift')

{
    console.log('CASE 1')

    const months = ['Jan', 'March', 'April', 'June'];

    const removed =shift(months)

    console.assert(months.length === 3)
    console.assert(removed === 'Jan')
    console.assert(months[0] === 'March')

}


{
    console.log('CASE 2')

    const months = ['Jan', 'March', 'April', 'June'];

    const result = ['March', 'April', 'June'] 

    shift(months)

    for(i in months) {
        console.assert(months[i] === result[i])
    }

}