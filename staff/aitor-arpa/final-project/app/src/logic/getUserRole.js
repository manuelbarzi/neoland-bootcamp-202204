const {validateJwt}= require('validator')
function getUserRole(token) {
   validateJwt(token)
    const parts = token.split('.')

    const change = atob(parts[1].split(','))

    const partrole = change.split('"')

    const role = partrole[7]   
    
    return role
 
}

export default getUserRole 