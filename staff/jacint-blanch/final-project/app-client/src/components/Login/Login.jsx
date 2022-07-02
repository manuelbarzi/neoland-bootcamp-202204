import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import authenticateUser from '../../logic/authenticateUser'
import Alert from '../Alert/Alert'
import NavBar from '../Landing/Navbar'

import './Login.sass'


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
            navigate('/landing')
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


    return(<>
     <NavBar />
        <form className='login' onSubmit={handleSubmit}>

            <div className='login__auth'>
                {alert && alert}
            
                <h1 className='login__auth__title'>Login</h1>

                <div className='login__auth__Row'>
                    <label>Username</label>
                    <input 
                        type='text' 
                        placeholder='Username' 
                        name='username'
                        onChange={handleInputChange}
                        required 
                    />
                </div>

                <div className='login__auth__Row'>
                    <label>Password</label>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        name='password'
                        onChange={handleInputChange} 
                        required
                    />
                </div>

                <div className='login__auth__btns'>
                    <button className='login__auth__btns__login'>Login</button>
                    <Link className='login__auth__btns__toRegister link' to='/register'>Register</Link>
                </div>
            </div>

        </form>
    </>
    )
}

export default Login