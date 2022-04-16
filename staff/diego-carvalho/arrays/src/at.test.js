
{
    console.log('TEST at')

    const nums = [5, 12, 8, 130, 44]

    {
        console.log('CASE 1')

        const results = at(nums, 2)

        console.assert(results === 8)
    }

    {
        console.log('CASE 2')

        const result = at(nums, -2)

        console.assert(result === 130)
    }

}


/*let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
 expected output: "Using an index of -2 item returned is 130"
*/
