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


    return(
        <form className='login' onSubmit={handleSubmit}>
            
            {alert && alert}

            <div className='login__Auth'>


                <div className='login__Auth__Items'>
                    <h1 className='login__Auth__Items__Title'>Login</h1>
                    <input 
                        className='login__Auth__Items__Input' 
                        type='text' 
                        placeholder='Username' 
                        name='username'
                        onChange={handleInputChange}
                        required 
                    />

                    <input 
                        className='login__Auth__Items__Input' 
                        type='password' 
                        placeholder='password' 
                        name='password'
                        onChange={handleInputChange} 
                        required
                    />

                    <Link className='login__Auth__Items__Link' to='/Register'>Register</Link>
                    <button className='login__Auth__Items__Btn' type='submit'><span>Login</span></button>
                </div>

                <div className='login__Auth__Img'>
                    <img className="login__Auth__Img__Tag" src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="imagen de login"/>
                </div>

            </div>
        </form>
    )
}

export default Login