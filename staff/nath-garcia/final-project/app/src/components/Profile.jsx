import { useState } from "react"
import Logger from '../vendor/Loggy'
import Context from './Context'
import ChangeName from './ChangeName'
//import ChangePassword from './ChangePassword'
import { useNavigate } from "react-router-dom"
import { isJwtValid } from "../validators"

function Profile(props) {
    // const logger = new Logger('Profile')

    // logger.info('call')

    const [view, setView] = useState('profile')
    const navigate = useNavigate()
    // const { handleFeedback } = useContext(Context)

    const handleBackClick = () => {
        props.onBackClick()
    }
    
    const handleChangeName = () => setView('changeName')
    const handleChangeUsername = () => setView('changeUsername')
    const handleChangePassword = () => setView('changePassword')
    const handleChangeEmail = () => setView('changeEmail')
    const handleChangePhone = () => setView('changePhone')
    const handleDeleteProfile = () => setView('deleteProfile')


    const handleClickedBackToProfile = () => setView('profile')

    const handleProfileChanged = () => setView('profile')

    return <div className="" >

        {view === 'profile' && <div>
            <header>
                <div>
                    <button onClick={handleBackClick}>Back</button>
                    <h1>Settings</h1>
                </div>
            </header>

            <div>

                <button className="" onClick={handleChangeName}>Cambiar nombre</button>
                <button className="" onClick={handleChangeUsername}>Cambiar username</button>
                <button className="" onClick={handleChangeEmail}>Cambiar contraseña</button>
                <button className="" onClick={handleChangePhone}>Cambiar phone</button>
                <button className="" onClick={handleChangePassword}>Cambiar password</button>

                <button className="" onClick={handleDeleteProfile}>Delete profile</button>

            </div>
        </div>}

        {view === 'changeName' && <ChangeName onClickedBackToProfile={handleClickedBackToProfile} onProfileChange={handleProfileChanged} />}

    </div>

}


export default Profile
