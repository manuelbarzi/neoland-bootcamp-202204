/**
 * - Itearte array from last index
 * - check each position and see whether it matches the target element
 * - if it matches, then returns index
 * - if it doesn't then return -1
 */

function lastIndex(array, searchElement, fromIndex = array.length -1){
    if(fromIndex >= 0)
    for (let i = fromIndex; i >-1; i++){
        const currElem = array[i]

        if(currElem === searchElement) return i 
    }
    else 
    for (let i = array.length + fromIndex; i > -1; i--) {
        const currElem = array[i]
    }
}