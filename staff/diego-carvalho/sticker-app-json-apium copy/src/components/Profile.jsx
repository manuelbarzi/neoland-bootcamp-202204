const { useContext } = React

function Profile() {
    const logger = new Logger('Profile')

    logger.info('call')

    const [view, setView] = useState(null)

    const handleChangeNameButtonClick = () => {

        setView('changeName')
    }

    const handleChangePasswordButtonClick = () => {

        setView('changePassword')
    }

    const handleDeleteUserButtonClick = () => {

        setView('deleteUser')
    }

    logger.info('render')
        
    return <div className="Profile">
        
        <button className="Profile__changeName" onClick={handleChangeNameButtonClick}>Change Name</button>
        <button className="Profile__changePassword" onClick={handleChangePasswordButtonClick}>Change Password</button>

        <div>
        <button className="Profile__deleteUser" onClick={handleDeleteUserButtonClick}>Delete User</button>
        </div>

        {view === 'changeName' && <ChangeName />} 
        {view === 'changePassword' && <ChangePassword />}
        {view === 'deleteUser' && <DeleteUser />}  
            
    </div>
    
}

