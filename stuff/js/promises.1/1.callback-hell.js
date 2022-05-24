function doSomething(callback) {
    setTimeout(() => {
        if (Math.random() > .6)
            return callback(new Error('random error'))

        callback(null)
    }, 1000)
}

// demo

doSomething(error => {
    if (error) return console.error(error)

    console.log(1)

    doSomething(error => {
        if (error) return console.error(error)

        console.log(2)

        doSomething(error => {
            if (error) return console.error(error)

            console.log(3)
        })
    })
})