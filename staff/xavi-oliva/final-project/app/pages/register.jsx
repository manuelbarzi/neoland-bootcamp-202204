import Link from 'next/link'
import { registerUser } from '../logic'
import { PrimaryButton, Input, Section } from '../components'

export default function Register() {
  // const { handleFeedback } = useContext(Context)

  const handleFormSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const username = event.target.username.value
    const password = event.target.password.value

    try {
      registerUser(name, username, password, error => {
        if (error) {
          handleFeedback({ level: 'error', message: error.message })

          return
        }

        props.onUserRegistered()
      })
    } catch (error) {
      handleFeedback({ level: 'error', message: error.message })
    }
  }

  return <>
    <Section>
      <form className="px-8" onSubmit={handleFormSubmit}>
        <Input type="text" name="name" placeholder="name"></Input>
        <Input type="text" name="email" placeholder="email"></Input>
        <Input type="password" name="password" placeholder="password"></Input>

        <PrimaryButton className='mb-4'>
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
