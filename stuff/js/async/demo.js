// 1
setTimeout(() => console.log('hola mundo', new Date), 1000)

// 2
console.log('hello world', new Date)

// 3
var before = Date.now()
while(Date.now() - before < 3000);

// 4
setTimeout(() => console.log('ciao mondo', new Date), 2000)

// 5
console.log('hola mon', new Date)

// VM811:5 hello world Wed May 18 2022 12:46:45 GMT+0200 (Central European Summer Time)
// VM811:15 hola mon Wed May 18 2022 12:46:48 GMT+0200 (Central European Summer Time)
// undefined
// VM811:2 hola mundo Wed May 18 2022 12:46:49 GMT+0200 (Central European Summer Time)
// VM811:12 ciao mondo Wed May 18 2022 12:46:51 GMT+0200 (Central European Summer Time)