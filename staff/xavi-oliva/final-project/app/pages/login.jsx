import { authenticateUser } from 'logic'
import Logger from 'loggy'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton, Input, Section } from '../components'
import { useRouter } from 'next/router'


export default function Login() {
	const logger = new Logger('Login')

	const router = useRouter()

    logger.info('call')

    // const { handleFeedback } = useContext(Context)

    const submitLogin = async event => {
        event.preventDefault()

		// router.push('/')
    }

	return /*isValidJWT(sessionStorage.token) ? <></> : */  <> 
		<Section>
			<h1 className='md:basis-1/2 text-5xl md:text-5xl text-center t-logo'>Brun's <span className="text-secondary">Flats</span></h1>
			<h3 className='md:basis-1/2 text-center text-secondary'>home sweet home</h3>

			<figure className='py-5'>
				<Image src="/media/myhouse.svg" height={150} width={150} />
			</figure>

			<form className="px-8" onSubmit={submitLogin}>
				<Input type="text" name="email" placeholder="email"></Input>
				<Input type="password" name="password" placeholder="password" />

				<PrimaryButton className='mb-4'>Login</PrimaryButton>

				<Link href='/register'>
					<a className='text-white block text-center'>
						Does not have an account? SIGN UP
					</a>
				</Link>
			</form>
		</Section>
	</>
}

