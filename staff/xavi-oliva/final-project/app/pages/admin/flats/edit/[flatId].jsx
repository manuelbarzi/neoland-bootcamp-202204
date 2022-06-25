import { updateFlat, retrieveFlat } from 'logic'
import { PrimaryButton, Input, Section, Form, Textarea } from '../../../../components'
import { verifyTokenWithAPICall } from '../../../helpers'
import { useRouter } from 'next/router'
import Apium from 'apium'

export default function EditFlat({ token, flat }) {
  const router = useRouter()

  // const { handleFeedback } = useContext(Context)

  const handleUpdateFlatFormSubmit = async event => {
    event.preventDefault()

    const title = event.target.title.value
    const description = event.target.description.value
    const address = event.target.address.value
    // const images = event.target.images.value

    try {

      event.target.reset()

      await updateFlat(token, flat._id, title, description, address )
      // handleFeedback

      router.push('/admin')

    } catch (error) {
      console.error(error)
      // handleFeedback(error.message)
    }
  }

  return <>
    <Section className='section'>
      <Form className='px-8' onSubmit={handleUpdateFlatFormSubmit}>
        <Input type="text" name="title" placeholder="Title" defaultValue={flat.title}></Input>
        <Textarea defaultValue={flat.description} name="description" rows="5" placeholder='Description' />
        <Input type="text" defaultValue={flat.address} name="address" placeholder="address"></Input>

        <PrimaryButton className='mb-4' type="submit">Save</PrimaryButton>

      </Form>
    </Section>
  </>
}

export async function getServerSideProps({ req, res, params: { flatId } }) {

  const token = await verifyTokenWithAPICall(req, res)
  const flat = await retrieveFlat(token, flatId)

  return {
    props: {
      token: token || null,
      flat
    }
  }
}