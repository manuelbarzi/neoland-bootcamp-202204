import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import authenticateUser from '../../logic/authenticateUser'
import Alert from '../Alert'


const Login = () => {
    const navigate = useNavigate()

    const [alert, setAlert] = useState(null)
    const [datos, setDatos] = useState({
        username: '',
        password: ''
    })
    const {username, password} = datos

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const token = await authenticateUser(username, password)

            sessionStorage.token = token
            navigate('/project')
        } catch (error) {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }
        }
    }


    return(
        <form className='login_Container' onSubmit={handleSubmit}>
            {alert && alert}
            <div className='login_Container_Auth'>
                <h1 className='login_Title'>Login</h1>
                <input 
                    className='login_Input' 
                    type='text' 
                    placeholder='Username' 
                    name='username'
                    onChange={handleInputChange}
                    required 
                />

                <input 
                    className='login_Input' 
                    type='password' 
                    placeholder='password' 
                    name='password'
                    onChange={handleInputChange} 
                    required
                />

                <Link className='Login_link' to='/Register'>Register</Link>
                <button className='login_Btn' type='submit'><span>Login</span></button>

            </div>
        </form>
    )
}

export default Login