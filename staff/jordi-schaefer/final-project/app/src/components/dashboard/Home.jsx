import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from 'validators'
import Context from '../Context'
import ActivitiesList from './ActivitiesList'
import Comment from './Comment'
import Settings from '../settings/Settings'
import ChangeName from '../settings/ChangeName'
import ChangePassword from '../settings/ChangePassword'
import ChangeEmail from '../settings/ChangeEmail'
import DeleteUser from '../settings/DeleteUser'
import DeleteActivity from '../settings/DeleteActivity'
import '../../styles/List.sass'


function Home(props) {
 
    const [view, setView] = useState(null)
    const [back, setBack] = useState(null)
    const [activityId, setActivityId] = useState(null)
    const { handleFeedback } = useContext(Context) // quiero usar del contexto el handleFeedback, "traeme el value y destructurame esto"
    const navigate = useNavigate()


    // primero renderiza y luego lanza el DidMount
    useEffect(() => {
        if (isJwtValid(sessionStorage.token)) {
            setView('Home')
        } else navigate('/') 
    }, [] ) 


    const handleHomeClick = () => {
        setView('Home')
        document.getElementById("home").classList.add('Button__selected') 
        document.getElementById("homeL").classList.add('Button__selected') 
        document.getElementById("profile").classList.remove('Button__selected')
        document.getElementById("profileL").classList.remove('Button__selected') 
    }
    const handleActivityClick = () => navigate('/activity')
    const handleProfileClick = () => {
        setView('Profile')
        document.getElementById("home").classList.remove('Button__selected') 
        document.getElementById("homeL").classList.remove('Button__selected') 
        document.getElementById("profile").classList.add('Button__selected') 
        document.getElementById("profileL").classList.add('Button__selected') 
    }

    const handleSettingClick = () => {setView('Settings'); setBack('Profile')}

    const handleChangeNameClick = () => {setView('Change Name'); setBack('Settings')}
    const handleChangePasswordClick = () => {setView('Change Password'); setBack('Settings')}
    const handleChangeEmailClick = () => {setView('Change Email'); setBack('Settings')}
    const handleDeleteActivityClick = () => {setView('Delete Activity'); setBack('Settings')}
    const handleDeleteUserClick = () => {setView('Delete User'); setBack('Settings')}
    
    const handleLogoutClick = () => {
        props.onUserLoggedOut()
    }

    const handleDataChanged = () => handleBackClick()

    const handleBackClick = () => {
        if (view === 'Settings' || view === 'Comment') {
            setView('Profile') 
            setBack(null)
        }
        else if (['Settings','Change Name','Change Password', 'Change Email', 'Delete Activity', 'Delete User'].includes(view)){
            setView('Settings'); setBack('Profile')
        }
    }

    const handleCommentClicked = (activityId) => {
        setView('Comment')
        setBack('Back')
        setActivityId(activityId)
    }
    


    return  isJwtValid(sessionStorage.token) ?
    <div className="Container Overflow mw mh">
        <header className="Header">
            {(['Settings','Change Name','Change Password', 'Change Email', 'Delete Activity', 'Delete User', 'Comment'].includes(view)) 
                && <button className="Button__back" onClick={handleBackClick}>{`< `+back}</button>}
            <h1 className="Center">{view}</h1>
            {view === 'Profile' && <button className="Button__set material-symbols-outlined" onClick={handleSettingClick}>Settings</button>}
        </header>


        <main className="Home__body mw mh Overflow">
            {view === 'Home' && <ActivitiesList onCommentClicked={handleCommentClicked}/>}
            {view === 'Profile' && <ActivitiesList onCommentClicked={handleCommentClicked}/>}

            {view === 'Settings' && <Settings onChangeNameClicked={handleChangeNameClick}
                onChangePasswordClicked={handleChangePasswordClick}
                onChangeEmailClicked={handleChangeEmailClick}
                onDeleteActivityClicked={handleDeleteActivityClick}
                onLogoutClicked={handleLogoutClick}
                onDeleteUserClicked={handleDeleteUserClick}/>}
            
            {view === 'Change Name' && <ChangeName onDataChanged={handleDataChanged}/>}
            {view === 'Change Password' && <ChangePassword onDataChanged={handleDataChanged}/>}
            {view === 'Change Email' && <ChangeEmail onDataChanged={handleDataChanged}/>}
            {view === 'Delete User' && <DeleteUser onDeletedUser={props.onDeletedUser}/>} 
            {view === 'Delete Activity' && <DeleteActivity />}

            {view === 'Comment' && <Comment activityId={activityId}/>}

        </main>

        
        <footer className="Footer">
            <div className="Footer__home">
                <button id="home" className="Button__selected Footer__icon material-symbols-outlined" onClick={handleHomeClick}>home</button>
                <button className="Footer__icon material-symbols-outlined" onClick={handleActivityClick}>radio_button_checked</button>
                <button id="profile" className="Footer__icon material-symbols-outlined" onClick={handleProfileClick}>person</button>
            </div>

            <div className="Footer__home">
                <h2 id="homeL" className="Button__selected Footer__word m_left_word" onClick={handleHomeClick}>Home</h2>
                <h2 className="Footer__word m_left_word" onClick={handleActivityClick}>Register</h2>
                <h2 id="profileL" className="Footer__word m_right_word" onClick={handleProfileClick}>Profile</h2>
            </div>
        </footer>

    </div> : <></>
}

export default Home