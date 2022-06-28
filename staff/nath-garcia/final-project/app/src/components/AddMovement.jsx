import { setState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import retrieveMovements from "../logic/retrieveMovements"
import Context from './Context'

function AddMovement(props) {

    const navigate = useNavigate()
    const { handleFeedback } = useContext(Context)

    const handleBackClick = () => {
        props.onBackClick()
    }

    

    const handleFormSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const surname = event.target.surname.value
        const username = event.target.username.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const password = event.target.password.value;
        (async () => {
            try {
                await retrieveMovements()
                navigate('/login')
            } catch (error) {
                handleFeedback({ level: 'error', message: error.message })
            }
        })();
    }

    return <div className="">

        <div>
            <form className="Container" onSubmit={handleFormSubmit}>
                <input className="Input Input--light" type="text" name="name" placeholder="name" />
                <input className="Input Input--light" type="text" name="surname" placeholder="surname" />
                <input className="Input Input--light" type="text" name="username" placeholder="username" />
                <input className="Input Input--light" type="email" name="email" placeholder="email" />
                <input className="Input Input--light" type="tel" name="phone" placeholder="phone" />
                <input className="Input Input--light" type="password" name="password" placeholder="password" />
                <button className="Button Button--light">Register</button>
                <button className="Button Link" to="/login">Login</button>
            </form>

        </div>}
    </div>
}

export default AddMovement