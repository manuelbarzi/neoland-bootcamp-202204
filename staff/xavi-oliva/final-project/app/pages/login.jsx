import { authenticateUser } from 'logic'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton, Input, Section, Form } from '../components'

import { verifyTokenWithAPICall } from './helpers'
import { useRouter } from 'next/router'
import { FunctionalContext } from "../contexts/functional-context"


export default function Login(props) {

  const { setFeedback } = FunctionalContext.useFeedback()
  const router = useRouter()

  // const { handleFeedback } = useContext(Context)

  const submitFormLogin = async event => {
    event.preventDefault()

    try {
      const email = event.target.email.value
      const password = event.target.password.value

      event.target.reset()

      const token = await authenticateUser(email, password)

      document.cookie = `token=${token}; max-age=86400;`
      setFeedback({ level: 'success', message: 'successfully logged in' })
      router.push('/admin')
    } catch (error) {
      // handleFeedback(error.message)
      setFeedback({ level: 'error', message: error.message })
    }
  }

  return <>
    <Section className='section'>
      <h1 className='d:basis-1/2 t-logo text-5xl md:text-5xl'>Brun's <span className="text-secondary">Flats</span></h1>
      <h3 className='md:basis-1/2 text-center text-secondary'>home sweet home</h3>

      <figure className='py-5'>
        <Image src="/media/myhouse.svg" height={150} width={150} />
      </figure>

      <Form className='px-8' onSubmit={submitFormLogin}>
        <Input type="text" name="email" placeholder="email"></Input>
        <Input type="password" name="password" placeholder="password" />

        <PrimaryButton className='mb-4' type="submit">Login</PrimaryButton>

        <Link href='/register'>
          <a className='pre-anchor'>
            Does not have an account? SIGN UP
          </a>
        </Link>
      </Form>
    </Section>
  </>
}

export const getServerSideProps = async ({ req, res }) => {

  return {
    props: {
      token: await verifyTokenWithAPICall(req, res) || null
    }
  }
}
