function reverse(arr) {
    for (let i = 0; i < arr.length; i++) {
        const lastItem = arr[arr.length - 1 - i]
        const firstItem = arr[i]
        arr[i] = lastItem
        arr[arr.length - 1 - i] = firstItem 
        if (i === arr.length - 1 - i || i + 1 === arr.length / 2)
            break;
    }
    return arr
}