import { useState } from "react"
import Logger from '../vendor/Loggy'
import Context from './Context'
import ChangeName from './ChangeName'
//import ChangePassword from './ChangePassword'
import { useNavigate } from "react-router-dom"
import { isJwtValid } from "../validators"

function Profile(props) {

    const [view, setView] = useState('profile')
    const navigate = useNavigate()


    const handleBackClick = () => {
        props.onBackClick()
    }

    const handleChangeName = () => setView('changeName')
    const handleChangePassword = () => setView('changePassword')
    const handleDeleteProfile = () => setView('deleteProfile')


    const handleClickedBackToProfile = () => setView('profile')
    const handleProfileChanged = () => setView('profile')

    return <div>

        {view === 'profile' && <div>
            <header>
                <div className="Box--back">
                    <button className="Button Button--light Button--back" onClick={handleBackClick}>Back</button>

                </div>
            </header>

                <h1>Settings</h1>
            <div className="Box--profile">
                <button className="Button Link" onClick={handleChangeName}>Cambiar nombre</button>
                <button className="Button Link" onClick={handleChangePassword}>Cambiar password</button>
                <button className="Button Link" onClick={handleDeleteProfile}>Delete profile</button>

            </div>
        </div>}

        {view === 'changeName' && <ChangeName onClickedBackToProfile={handleClickedBackToProfile} onProfileChange={handleProfileChanged} />}

    </div>

}


export default Profile
