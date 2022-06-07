var a = 1, b = 2

console.log(a + b);

// WARN following block does not isolate the new a and b vars
{
    var a = 3, b = 4 // WARN var is not block-scoped (but function scoped)

    console.log(a - b)
}


var c = 5

console.log(a + b + c)