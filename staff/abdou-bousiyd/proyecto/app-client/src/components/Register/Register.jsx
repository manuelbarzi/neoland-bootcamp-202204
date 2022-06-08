import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import Alert from '../Alert/Alert'
import registerUser from '../../logic/registerUser'

const Register = () => {
    const navigate = useNavigate()

    const [alert, setAlert] = useState(null)
    const [datos, setDatos] = useState({
        name: '',
        username: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const {name, username, password} = datos

    const handleFormSubmit = async event => {
        event.preventDefault()
        try{
            const token = await registerUser(name, username, password)
            sessionStorage.token = token
            navigate("/login");
        }catch(error) {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }
        }
    }

    return (
        <form className='Register_Container' onSubmit={handleFormSubmit}>
            {alert && alert}
            <div>
                <h1 className='Register_Title'>Register</h1>
                <input
                    className='Register_input'
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={handleInputChange}
                    required
                />

                <input
                    className='Register_input'
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={handleInputChange}
                    required
                />

                <input
                    className='Register_input'
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={handleInputChange}
                    required
                />

                <Link className='Register_link' to='/Login'>Login</Link>
                <button className='Register_Btn'><span>Register</span></button>
            </div>
        </form>
    )
}


export default Register;