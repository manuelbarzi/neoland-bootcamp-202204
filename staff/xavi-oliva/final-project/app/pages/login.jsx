import { authenticateUser } from 'logic'
import Logger from 'loggy'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton, Input, Section } from '../components'
import { verifyTokenWithAPICall } from './helpers'
import { useRouter } from 'next/router'

export default function Login(props) {
    const router = useRouter()

    // const { handleFeedback } = useContext(Context)

    const submitFormLogin = async event => {
        event.preventDefault()

        try {
            const email = event.target.email.value
            const password = event.target.password.value

            event.target.reset()
			
            const token = await authenticateUser(email, password)
            // handleFeedback
			
            document.cookie = `token=${token}; max-age=86400;`

            router.push('/home')
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }

	return /*isValidJWT(sessionStorage.token) ? <></> : */  <> 
		<Section>
			<h1 className='md:basis-1/2 text-5xl md:text-5xl text-center t-logo'>Brun's <span className="text-secondary">Flats</span></h1>
			<h3 className='md:basis-1/2 text-center text-secondary'>home sweet home</h3>

			<figure className='py-5'>
				<Image src="/media/myhouse.svg" height={150} width={150} />
			</figure>

			<form className="px-8" onSubmit={submitFormLogin}>
				<Input type="text" name="email" placeholder="email"></Input>
				<Input type="password" name="password" placeholder="password" />

				<PrimaryButton className='mb-4' type="submit">Login</PrimaryButton>

				<Link href='/register'>
					<a className='text-white block text-center'>
						Does not have an account? SIGN UP
					</a>
				</Link>
			</form>
		</Section>
	</>
}

export async function getServerSideProps({ req, res }) {
    return verifyTokenWithAPICall(req, res)
}
