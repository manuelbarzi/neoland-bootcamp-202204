function indexOf(array, searchElement, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
        var currentElement = array[i]

        if (currentElement === searchElement)
           return i
    }

   return 