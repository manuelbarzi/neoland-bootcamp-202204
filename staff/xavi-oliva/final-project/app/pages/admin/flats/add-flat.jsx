import { createFlat } from 'logic'
import { PrimaryButton, Input, Section, Form, Textarea } from '../../../components'
import { verifyTokenWithAPICall } from '../../helpers'
import { useRouter } from 'next/router'
import Apium from 'apium'
import { FunctionalContext } from '../../../contexts/functional-context'

export default function AddFlat({ token }) {
  const router = useRouter()
  const { setFeedback } = FunctionalContext.useFeedback()

  const handleFormSubmit = async event => {
    event.preventDefault()

    const title = event.target.title.value
    const description = event.target.description.value
    const address = event.target.address.value

    try {

      event.target.reset()

      await createFlat(token, { title, description, address })
      
      setFeedback({ level: 'success', message: 'New flat added' })

      router.push('/admin')

    } catch (error) {
      setFeedback({ level: 'error', message: error.message })
    }
  }

  return <>
    <Section className='section'>
      <Form className='px-8' onSubmit={handleFormSubmit}>
        <Input type="text" name="title" placeholder="Title"></Input>
        <Textarea name="description" rows="5" placeholder='Description' />
        <Input type="text" name="address" placeholder="address"></Input>
        <PrimaryButton className='mb-4' type="submit">Save</PrimaryButton>
      </Form>
    </Section>
  </>
}

export async function getServerSideProps({ req, res }) {

  const token = await verifyTokenWithAPICall(req, res)

  return {
    props: {
      token: token || null
    }
  }
}