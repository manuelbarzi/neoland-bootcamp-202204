const {validateJwt}= require('validator')
function getUserId(token) {
   validateJwt(token)
    const parts = token.split('.')

    const change = atob(parts[1].split(','))

    const partrole = change.split('"')

    const role = partrole[3]   
    
    return role
 
}

export default getUserId 