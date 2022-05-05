var a = 1
undefined
var o = {}
undefined
var b = a
undefined
var p = o
undefined
o.name = 'Peter'
'Peter'
o.name
'Peter'
p.name
'Peter'
a.name = 'Wendy'
'Wendy'
a
1
p.age = b
1
var q = []
undefined
q[0] = true
true
q[1] = false
false
o[0] = q
(2) [true, false]
q[0]
true
o[0]
(2) [true, false]
o[0][1]
false
var f = function() { return 'hello' }
undefined
q[2] = f
ƒ () { return 'hello' }
f()
'hello'
o['0']['2']()
'hello'
q
(3) [true, false, ƒ]0: true1: false2: ƒ ()length: 3[[Prototype]]: Array(0)
q.length
3
o
{0: Array(3), name: 'Peter', age: 1}0: (3) [true, false, ƒ]age: 1name: "Peter"[[Prototype]]: Object
q.name = 'Wendy'
'Wendy'
q
(3) [true, false, ƒ, name: 'Wendy']0: true1: false2: ƒ ()name: "Wendy"length: 3[[Prototype]]: Array(0)