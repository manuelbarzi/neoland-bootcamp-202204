import './Logout.sass'


export default function Logout({onLogout}) {

    const ClickLogOut = () => {
        delete sessionStorage.token
        onLogout()
    }

    return (
        <div className="pos">

            <button  className="logout" onClick={ClickLogOut}>Logout</button>
        </div>
    )
}