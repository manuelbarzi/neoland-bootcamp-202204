import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import Alert from '../Alert/Alert'
import registerUser from '../../logic/registerUser'
import NavBar from '../Landing/Navbar'
import './Register.sass'

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
        <>
        <NavBar />
        <form className='register' onSubmit={handleFormSubmit}>

            <div className='register__auth'>
                {alert && alert}

                <h1 className='register__auth__title'>Register</h1>

                <div className='register__auth__Row'>
                    <label>Name</label>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='register__auth__Row'>
                    <label>Username</label>
                    <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='register__auth__Row'>
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
                    <Link className='login__auth__btns__login link' to='/login'>Login</Link>
                    <button className='login__auth__btns__toRegister' to='/register'>Register</button>
                </div>
            </div>
        </form>
        </>
    )
}


export default Register;