function lastIndexOf(array, searchElement) {
    /*
    - iterate array from last index
    - check each position and see whether it matches the target element
    - if it matches, then return index
    - if it doesn't then return -1
    */

    for (let i = array.length - 1; i > -1; i--) {
        const currElem = array[i]

        if (currElem === searchElement) return i
    }

    return -1
}