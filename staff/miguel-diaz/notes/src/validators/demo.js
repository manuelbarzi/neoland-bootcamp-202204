const fs = require('fs')

fs.readdir('./src/logic', (error, files) => {
    console.log(error, files)
})