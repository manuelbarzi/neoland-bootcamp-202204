import { Div, Card, PrimaryButton, Section, CardContent, CardBookingList, CardContactInfo } from "../../components";
import { retrieveFlat, deleteFlat, retrieveBookings, retrieveUser } from 'logic'
import { verifyTokenWithAPICall } from '../helpers'
import { useRouter } from 'next/router'
import { FunctionalContext } from "../../contexts/functional-context";

export default function Flat({ token, user, flat, bookings }) {
    const router = useRouter()
    const { setFeedback } = FunctionalContext.useFeedback()
    
    const handleRemoveClick = async () => {

        try {
            await deleteFlat(token, flat._id)
            
            setFeedback({ level: 'success', message: 'Flat deleted' })

            router.push('/admin')

        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }            
    }

    const handleEditButtonClick = () => router.push(`/admin/flats/edit/${flat._id}/`)

    return <>
        <Section className='section-scroll'>
            <Div className='min-h-full p-1'>
                <Card>
                    <CardContent flat={flat} />

                    <CardContactInfo user={user} />
                    
                    <CardBookingList token={token} flat={flat} bookings={bookings} />

                    <div className='flex flex-row basis-auto gap-2'>
                        <PrimaryButton className='bg-red-500' onClick={handleRemoveClick}>Delete</PrimaryButton>
                        <PrimaryButton onClick={handleEditButtonClick}>Edit</PrimaryButton>
                    </div>
                </Card>
            </Div>
        </Section>
    </>
}

export async function getServerSideProps({ req, res, params: { flatId } }) {
    const token = await verifyTokenWithAPICall(req, res)
    const flat = await retrieveFlat(token, flatId)
    const user = await retrieveUser(token)
    const bookings = await retrieveBookings(token, flatId)

    return {
        props: {
            token: token || null,
            flat,
            bookings,
            user
        }
    }
}