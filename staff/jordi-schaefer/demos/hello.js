/* const name = process.argv[2]

console.log(`Hello!, ${name}`)

// node inspect-brk hello Pepito

 */


const { stdin: i, stdout: o } = process
//console.log('give me a name')
o.write('give me a name\n')

i.on('data', chunk => {
    o.write(`Hello, ${chunk.toString().trim()}!\n`)

    o.write('give me a name\n')
})