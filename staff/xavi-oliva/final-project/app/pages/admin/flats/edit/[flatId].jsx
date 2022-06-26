import { updateFlat, retrieveFlat } from 'logic'
import { PrimaryButton, Input, Section, Form, Textarea, Div, Card } from '../../../../components'
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

      await updateFlat(token, flat._id, title, description, address)
      // handleFeedback

      router.push('/admin')

    } catch (error) {
      console.error(error)
      // handleFeedback(error.message)
    }
  }

  return <>
    <Section className='section-scroll'>
      <Div className='min-h-full p-1'>
        <Card className='mb-1'>
          <h4 className='p-2 font-semibold text-sm'>Edit Flat:</h4>
          <Form className='px-1' onSubmit={handleUpdateFlatFormSubmit}>
            <Input className='border border-primary' type="text" name="title" placeholder="Title" defaultValue={flat.title}></Input>
            <Textarea className='border border-primary' defaultValue={flat.description} name="description" rows="5" placeholder='Description' />
            <Input className='border border-primary' type="text" defaultValue={flat.address} name="address" placeholder="address"></Input>
            <PrimaryButton type="submit">Save Flat</PrimaryButton>
          </Form>
        </Card>
        <Card>
        <h4 className='p-2 font-semibold text-sm'>Add Booking:</h4>
          <Form className='px-1'>
            <Input className='border border-primary' type="text" name="name" placeholder="Name" />
            <Input className='border border-primary' type="text" name="phone"  placeholder='Phone' />
            <Input className='border border-primary' type="text" name="email" placeholder="email" />
            <Textarea className='border border-primary' name="text" rows="3" placeholder='Add a note' />
            <Input className='border border-primary' type="text" name="from" placeholder="Initial date" />
            <Input className='border border-primary' type="text" name="to" placeholder="End date" />
            <PrimaryButton type="submit">Save Booking</PrimaryButton>
          </Form>
        </Card>
      </Div>
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