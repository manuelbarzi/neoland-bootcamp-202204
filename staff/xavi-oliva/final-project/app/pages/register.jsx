import Link from 'next/link'
import { registerUser } from 'logic'
import { Section, Form, Input, PrimaryButton } from '../components'
import { useRouter } from 'next/router'
import { verifyTokenWithAPICall } from './helpers'
import { FunctionalContext } from '../contexts/functional-context'

export default function Register(props) {
  const { setFeedback } = FunctionalContext.useFeedback()
  const router = useRouter()

  const handleFormSubmit = async event => {
      event.preventDefault()

      const name = event.target.name.value
      const email = event.target.email.value
      const password = event.target.password.value

      try {
          await registerUser(name, email, password)

          setFeedback({ level: 'success', message: 'Successfully registered' })
          
          router.push('/login')

      } catch (error) {
          setFeedback({ level: 'error', message: error.message })
      }
  }

  return <>
    <Section className='section'>
      <Form className='px-8' onSubmit={handleFormSubmit}>
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
      </Form>
    </Section>
  </>
}

export async function getServerSideProps({ req, res }) {
  const token = verifyTokenWithAPICall(req, res)

  return {
      props: {}
  }
}