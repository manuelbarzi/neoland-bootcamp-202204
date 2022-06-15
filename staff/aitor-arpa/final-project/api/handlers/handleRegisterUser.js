  
const { createUser } = require('../logic')
const { handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => { // tengo un express pediente de si recive un POST a users, y me devuelve (req, res)
    try {
        const adminId = verifyToken(req)
        const { body: {name, username, password, role, nid, email,date} } = req // extraigo las propiedades del body que me ha ggenerado jsonBodyParser
    
        createUser(adminId, name, username, password, role, nid, email, date) // llamo a mi funcion
            .then(() => res.status(201).send()) // cuando ha acabado, envio al res un status 201
            .catch(error => // si el registro lanza un error ASINCRONO que llega más tarde
                handleErrorsAndRespond(error, res))
    } catch (error) { // si pillo errores SINCRONOS, 
        // lanzados directo de throw (ej. validaros), antes de llegar al siguiente then
        handleErrorsAndRespond(error, res)
    }
}