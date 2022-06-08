
import { isJwtValid } from '../validators'

function Lunes () {
    
    
    return isJwtValid(sessionStorage.token) ? <></> :
    <div className= "Lunes Container"> 
        <h1 className="h1"> LUNES </h1>
        
    </div>
}

export default Lunes

