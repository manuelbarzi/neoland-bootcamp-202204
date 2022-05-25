function salute(name) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(`Hello, ${name}!`), Math.round(1000 * Math.random())))
}

// demo

(async () => {
    {
        const salutation = await salute('Peter')
    
        console.log(salutation)
    }

    {
        const salutation = await salute('Jack')
    
        console.log(salutation)
    }

    {
        const salutation = await salute('Mary')
    
        console.log(salutation)
    }
})()