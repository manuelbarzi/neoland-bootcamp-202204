function pop(arr) {
    let elementToPop = arr[arr.length - 1]
    arr.length = arr.length - 1
    return elementToPop
}