import Link from 'next/link'
import { registerUser } from 'logic'
import { PrimaryButton, Input, Section } from '../components'

export default function Register(props) {
  // const { handleFeedback } = useContext(Context)

  const handleFormSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      registerUser(name, email, password, error => {
        if (error) {
          console.log('successfully registered')
          // handleFeedback({ level: 'error', message: error.message })

          return
        }

        props.onUserRegistered()
      })
    } catch (error) {
      console.error(error)
      // handleFeedback({ level: 'error', message: error.message })
    }
  }

  return <>
    <Section>
      <form className="px-8" onSubmit={handleFormSubmit}>
        <Input type="text" name="name" placeholder="name"></Input>
        <Input type="text" name="email" placeholder="email"></Input>
        <Input type="password" name="password" placeholder="password"></Input>

        <PrimaryButton type="submit" className='mb-4'>
          Sign Up
        </PrimaryButton>

        <Link href='/login'>
          <a className='text-white block text-center'>
            Already have an account? LOGIN
          </a>
        </Link>
      </form>
    </Section>
  </>
}
