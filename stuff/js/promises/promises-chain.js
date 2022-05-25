new Promise((resolve, reject) => {
    resolve(1)
})
    .then(v => console.log(v))
    .then(() => 2)
    .then(() => { throw 4 })
    .then(v => console.log(v))
    .catch(e => console.error(e))
    .then(() => 3)
    .then(console.log)
    
// VM1971:4 1
// VM1971:8 4
// (anonymous) @ VM1971:8
// Promise.catch (async)
// (anonymous) @ VM1971:8
// 3