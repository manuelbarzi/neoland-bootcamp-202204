function doSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .6)
                return reject(new Error('random error'))

            resolve(null)
        }, 1000)
    })
}

// demo

doSomething()
    .then(() => {
        console.log(1)

        return doSomething()
    })
    .then(() => {
        console.log(2)

        return doSomething()
    })
    .then(() => {
        console.log(3)
    })
    .catch(error => console.error(error))
