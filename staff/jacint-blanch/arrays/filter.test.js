console.log('Test filter')

{
    console.log('Case')

   const ages = [3, 89, 90, 40, 6]

   function filterAges(ages){
       return ages > 18
   }

   const over18 = filter(ages, filterAges)

   console.log(over18,999)

   console.assert(over18[0]  === 89)
   console.assert(over18[1]  === 90)
   console.assert(over18[2]  === 40)

}