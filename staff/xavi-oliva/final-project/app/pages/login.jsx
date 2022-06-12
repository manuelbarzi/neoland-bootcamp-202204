import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton, Input, Section } from '../components'


export default function Login() {
	return <>
		<Section>
			<h1 className='md:basis-1/2 text-5xl md:text-5xl text-center t-logo'>Brun's <span className="text-secondary">Flats</span></h1>
			<h3 className='md:basis-1/2 text-center text-secondary'>home sweet home</h3>

			<figure className='py-5'>
				<Image src="/media/myhouse.svg" height={150} width={150} />
			</figure>

			<form className="px-8">
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

