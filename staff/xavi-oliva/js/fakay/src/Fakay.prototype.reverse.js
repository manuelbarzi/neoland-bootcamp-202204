// function reverse(array) {
//     for (let i = 0; i < array.length; i++) {
        
//         const lastItem = array[array.length -1 -i];
        
//         const firstItem = array[i]

//         array[i] = lastItem

//         array[array.length -1 -i] = firstItem
        
//         if (i === array.length -1 -i || i + 1 === array.length / 2) 
//             i = array.length
//     }
//     return array
// }

Fakay.prototype.reverse = function () {
    for (let i = 0; i < this.length / 2; i++) {
        const elemA = this[i]
        const elemB = this[this.length - 1 - i]

        this[i] = elemB
        this[this.length - 1 - i] = elemA
    }

    return this
}