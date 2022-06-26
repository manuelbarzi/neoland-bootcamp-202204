import { useContext } from "react"
import Logger from '../vendor/Loggy'
import Context from './Context'
import ChangeName from './ChangeName'
import ChangePassword from './ChangePassword'
import { useNavigate } from "react-router-dom"
import { isJwtValid } from "../validators"

function Profile(props) {
    const logger = new Logger('Profile')

    //const [view, setView] = useState('profile')
    const navigate = useNavigate()
    const { handleFeedback } = useContext(Context)

    logger.info('call')

    //const handleChangeName = () => setView('changeName')
    //const handleChangeUsername = () => setView('changeUsername')
    //const handleChangePassword = () => setView('changePassword')
    //const handleChangeEmail = () => setView('changeEmail')
    //const handleChangePhone = () => setView('changePhone')
    //const handleDeleteProfile = () => setView('deleteProfile')

    const handleLogout = () => {
        delete sessionStorage.token
        navigate("/login")
    }

    return isJwtValid(sessionStorage.token) ? <></> : <div>
        <button className="" onClick={handleChangeName}>Cambiar nombre</button>
        <button className="" onClick={handleChangeUsername}>Cambiar username</button>
        <button className="" onClick={handleChangeEmail}>Cambiar contraseña</button>
        <button className="" onClick={handleChangePhone}>Cambiar phone</button>
        <button className="" onClick={handleChangePassword}>Cambiar password</button>

        <button className="" onClick={handleLogout}>Log out</button>
        <button className="" onClick={handleDeleteProfile}>Delete profile</button>
    </div>

}

export default Profile
