console.clear()

//this.name = 'Global'
window.name = 'Window'

//var a = 1
//console.log(window.a)

function salute(to) {
    console.log(`${this.name}: Hello, ${to.name}!`)
}

//salute('Wendy')

var peter = { name: 'Peter' }
var mary = { name: 'Mary' }
var wendy = { name: 'Wendy' }
var jack = { name: 'Jack' }

//salute.call(peter, wendy)
//salute.call(mary, wendy)

/*
var peterSalute = function(to) {
    salute.call(peter, to)
}
*/
var peterSalute = salute.bind(peter)

var wendySalute = function(to) {
    salute.call(wendy, to)
}

peterSalute(wendy)
peterSalute(mary)
peterSalute(jack)

wendySalute(peter)
wendySalute(mary)
wendySalute(jack)

peter.salute = salute
peter.salute(wendy)

wendy.salute = salute
wendy.salute(peter)