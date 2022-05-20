const fs = require('fs')
//test access
/*fs.access('./createUser.js', fs.constants.F_OK, err =>{
    console.log(err)


})

method access

fs.access(file, constants.F_OK, (error) => {
    console.log(`${file}${err ? 'does not exist' : 'exist'}`)
})*/

// method reddir

fs.readdir('./src/logic',(error, files) =>{
    console.log(error, files)
} )

