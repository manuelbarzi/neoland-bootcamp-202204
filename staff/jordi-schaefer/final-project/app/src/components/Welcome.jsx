
function Welcome (props) {

    const handleLoginLinkClick = event => {
        event.preventDefault()
        props.onLoginLinkClicked()
    }
    
    const handleRegisterLinkClick = event => {
        event.preventDefault()
        props.onRegisterLinkClicked()
    }

    return <div className="Container__image Container Flex__end mh mw">
        <div className="Container Background__box mw Container__buttons pb">
            <h3>Do you already have an account?</h3>
            <a href="#" className=" Button__color" onClick={handleLoginLinkClick}>Login</a>
            <h3>First time here?</h3>
            <a href="#" className=" Button__color Button__register" onClick={handleRegisterLinkClick}>Register</a>
        </div>
    </div>
}

export default Welcome