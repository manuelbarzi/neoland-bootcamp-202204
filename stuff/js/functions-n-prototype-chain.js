add = new Function('a', 'b', 'return a + b')
// ƒ anonymous(a,b
// ) {
// return a + b
// }
add(1, 2)
// 3
add = function(a, b) { return a + b }
// ƒ (a, b) { return a + b }
add(1, 2)
// 3
add.__proto__
// ƒ () { [native code] }
add.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
add.__proto__.__proto__.__proto__
// null
Object
// ƒ Object() { [native code] }