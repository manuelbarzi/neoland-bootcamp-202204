import Logger from '../vendor/Loggy'
import {validateJwt} from '../validators'
import Apium from '../vendor/Apium'

function saveMovement(token, movementId, ) {
    validateJwt(token)
}

export default saveMovement