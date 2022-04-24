function shift(array) {
    if (array.length) {
        const first = array[0]

        for (let i = 0; i < array.length - 1; i++) {
            const next = array[i + 1]

            array[i] = next
        }

        array.length--

        return first
    }
}




