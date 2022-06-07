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

(async () => {
    try {
        await doSomething()

        console.log(1)

        await doSomething()

        console.log(2)

        await doSomething()

        console.log(3)
    } catch (error) {
        console.error(error)
    }
})() // iife
