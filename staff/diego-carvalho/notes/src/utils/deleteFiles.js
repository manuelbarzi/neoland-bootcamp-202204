const { readdir, unlink } = require('fs')
//funcion deleFiles
function deleteFiles(folder, callback) {//le paso como parametros una carpeta folder y la una callback
    readdir(folder, (error, files) => {//hago un readdir para leer los archivos e le paso error e files como callback.
        if (error) return callback(error)//si hay error me devolve error si no...

        let count = 0, _error//declaro una variable count (contador)que empezará a contar desde de 0 

        if (files.length)//cogo la longitude de file...
            files.forEach(file => {//...y con forEach voy executando la función para cada file
                unlink(`${folder}/${file}`, error => {//con unlink doy el comando para eliminar cada una de las files dentro de la carpeta folder...
                    if (!_error) {// si no ha habido ningún error, que vay borrando los archivos.
                        if (error) return callback(_error = error)

                        count++//contador 

                        if (count === files.length)//si counnt (0) es igual a file.length que en este punto es igual a 0
                            callback(null)//enviamos una callback nula y terminamo.
                    }
                })
            })
        else
            callback(null)//si no exite file en folder, ni entramos en la función de eleminar files, venimos directo en esta callback.
    })
}

module.exports = deleteFiles