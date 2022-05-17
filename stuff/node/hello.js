const { stdin: i, stdout: o } = process

o.write('give me a name\n')

i.on('data', chunk => {
    o.write(`Hello, ${chunk.toString().trim()}!`)

    o.write('give me a name\n')
})