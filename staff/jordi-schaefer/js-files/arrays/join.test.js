console.log('TEST join')


const elements = ['fire', 'air', 'water']

{
    console.log('CASE 1')
    const result = join(elements)
    console.assert(result==='fire,air,water')
}

{
    console.log('CASE 2')
    const result = join(elements,'')
    console.assert(result==='fireairwater')
}

{
    console.log('CASE 3')
    const result = join(elements,'-')
    console.assert(result==='fire-air-water')
}