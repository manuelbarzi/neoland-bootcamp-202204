// demo 1

function salute(name) {
    console.log('hello ' + name)
}('peter')
//'peter' // WARN it does not work, it is not invoking the function salute

// demo 2

(function salute(name) {
    console.log('hello ' + name)
}('peter'))
//VM363:2 hello peter
//undefined

// demo 3

(function salute(name) {
    console.log('hello ' + name)
})('peter')
//VM391:2 hello peter
//undefined