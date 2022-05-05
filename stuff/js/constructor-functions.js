o = {}
// {}
o = new Object
// {}
Object
// ƒ Object() { [native code] }
function Student() {}
// undefined
s = new Student
// Student {}
s instanceof Object
// true
s instanceof Student
// true
o instanceof Student
// false
a = []
// []
a = new Array
// []
a instanceof Object
// true
a instanceof Array
// true
a instanceof Student
// false