{
    console.log('TEST at')

    const nums = [5, 12, 8, 130, 44]

    {
        console.log('CASE 1')

        const result = at(nums, 2)

        console.assert(result === 8)
    }

    {
        console.log('CASE 2')

        const result = at(nums, -2)

        console.assert(result === 130)
    }
}
// para probar en consola, volver a copiar el array nums