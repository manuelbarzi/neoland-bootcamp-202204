import { updateFlat, retrieveFlat, createBooking } from 'logic'
import { PrimaryButton, Input, Section, Form, Textarea, Div, Card, EditFlatForm, AddBookingForm } from '../../../../components'
import { verifyTokenWithAPICall } from '../../../helpers'
import { useRouter } from 'next/router'
import { FunctionalContext } from '../../../../contexts/functional-context'

export default function EditFlat({ token, flat }) {
  const router = useRouter()
  const { setFeedback } = FunctionalContext.useFeedback()

  const handleUpdateFlatFormSubmit = async event => {
    event.preventDefault()

    const title = event.target.title.value
    const description = event.target.description.value
    const address = event.target.address.value
    // const images = event.target.images.value

    try {

      event.target.reset()

      await updateFlat(token, flat._id, title, description, address)
      
      setFeedback({ level: 'success', message: 'Flat information updated' })

      router.push(`/flats/${flat._id}`)

    } catch (error) {
      setFeedback({ level: 'error', message: error.message })
    }
  }

  const handleAddBookingFormSubmit = async event => {
    event.preventDefault()

    const name = event.target.name.value
    const phone = event.target.phone.value
    const email = event.target.email.value
    const text = event.target.text.value
    const from = event.target.from.value
    const to = event.target.to.value

    try {

      event.target.reset()

      await createBooking(token, flat._id, { name, phone, email, text, from, to })
      
      setFeedback({ level: 'success', message: 'Booking created' })

      router.push(`/flats/${flat._id}`)

    } catch (error) {
      setFeedback({ level: 'error', message: error.message })
    }
  }

  return <>
    <Section className='section-scroll'>
      <Div className='min-h-full p-1'>
        <Card className='mb-1'>
          <h4 className='title-edit'>Edit Flat:</h4>
          <EditFlatForm flat={flat} onSubmit={handleUpdateFlatFormSubmit} />
        </Card>
        <Card>
          <h4 className='title-edit'>Add Booking:</h4>
          <AddBookingForm flat={flat} onSubmit= {handleAddBookingFormSubmit} />
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