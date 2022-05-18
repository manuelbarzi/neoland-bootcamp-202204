console.clear()

var p1 = { x: 1, y: 1 }
var p2 = { x: 2, y: 2 }
var p3 = { x: 3, y: 3 }

//var sqrt = Math.sqrt
//var pow = Math.pow
var { sqrt, pow } = Math

function dist(target) {
    //return Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2))
    return sqrt(pow(this.x - target.x, 2) + pow(this.y - target.y, 2))
}

//console.log(dist.call(p1, p2))
//console.log(dist.call(p1, p3))

//var p1Dist = dist.bind(p1)
/*
var p1Dist = function(target) {
    return dist.call(p1, target)
}
*/

//var p2Dist = dist.bind(p2)
/*
var p2Dist = function(target) {
    return dist.call(p2, target)
}
*/

function bind(callback, context) {
    return function() {
        return callback.call(context, ...arguments)
    }
}

var p1Dist = bind(dist, p1)
var p2Dist = bind(dist, p2)

console.log(p1Dist(p2))
console.log(p1Dist(p3))
console.log(p2Dist(p3))