import { FormRegister, Logo } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterPage.sass'
import { registerUser } from './../logic'

export const RegisterPage = () => {

  const navigate = useNavigate()

  const handleFormSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      registerUser(name, email, password, error => {
        if (error) {
          // handleFeedback({ level: 'error', message: error.message })
          alert(error)
          return
        }
        navigate('/login')
        
      })

    } catch (error) {
      // handleFeedback({ level: 'error', message: error.message })
      alert(error)
    }
  }

  return <section className='Register-page'>

    <Logo />
    <FormRegister onSubmit={handleFormSubmit} />
    <Link to="/login" className='Link'>
      Login
    </Link>

  </section>

}


// Crear el compo logo

// maquetas el el register
// maquetas login