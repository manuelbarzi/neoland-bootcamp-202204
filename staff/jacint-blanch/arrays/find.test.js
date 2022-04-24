console.log('Test find')

{
    console.log('Case')

    const age = [3, 7, 20, 26, 80]

    function checkAge(age) {
        return age > 18;
      }
      

    const biggerAge = find(age, checkAge)


    console.assert(biggerAge === 20)
}