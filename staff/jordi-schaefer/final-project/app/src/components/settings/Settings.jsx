
function Settings(props) {

    return <div className="Container mw m__form">     
        <button className="Button__setting" onClick={props.onChangeNameClicked}>Change Name</button>
        <button className="Button__setting" onClick={props.onChangePasswordClicked}>Change Password</button>
        <button className="Button__setting" onClick={props.onChangeEmailClicked}>Change email</button>
        <p></p>
        <button className="Button__setting" onClick={props.onDeleteActivityClicked}>Delete activity</button>
        <p></p>
        <button className="Button__setting" onClick={props.onLogoutClicked}>Logout</button>
        <button className="Button__setting red" onClick={props.onDeleteUserClicked}>Delete User</button>
    </div>
}

export default Settings