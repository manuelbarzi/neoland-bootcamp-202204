function lastIndexOf(array, searchElement, fromIndex = array.length - 1) {
    if (fromIndex >= 0)
        for (let i = fromIndex; i > -1; i--) {
            const currElem = array[i]

            if (currElem === searchElement) return i
        }
    else
        /*
        - i starts from array.length + fromIndex
        */
        for (let i = array.length + fromIndex; i > -1; i--) {
            const currElem = array[i]

            if (currElem === searchElement) return i
        }

    return -1
}