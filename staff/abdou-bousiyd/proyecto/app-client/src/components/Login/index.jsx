import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import authenticateUser from '../../logic/authenticateUser'
import Alert from '../Alert'
import '../Login/index.sass'


const Login = ({toggleTitle, loadUser}) => {
    // console.log(toggle,122)
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
            loadUser && loadUser(true)
            toggleTitle()
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
                        placeholder='password' 
                        name='password'
                        onChange={handleInputChange} 
                        required
                    />
                </div>

                <button className='login__auth__btn' type='submit'><span>Login</span></button>
                <Link className='login__auth__link' to='/Register'>Register</Link>
            </div>

        </form>
    </>
    )
}

export default Login