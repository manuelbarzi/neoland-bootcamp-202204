function salute(name) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(`Hello, ${name}!`), Math.round(1000 * Math.random())))
}

// demo

salute('Peter')
    .then(salutation => console.log(salutation))
    .then(() => salute('Jack'))
    .then(salutation => console.log(salutation))
    .then(() => salute('Mary'))
    .then(salutation => console.log(salutation))