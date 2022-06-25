import { Div, Card, PrimaryButton, Section, CardContent, CardBookingList, CardContactInfo } from "../../components";
import { retrieveFlat, deleteFlat } from 'logic'
import { verifyTokenWithAPICall } from '../helpers'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Flat({ token, flat }) {
    const router = useRouter()
    
    const handleRemoveClick = async () => {
        // const { flatId, onRemove } = props

        try {
            await deleteFlat(token, flat._id)
            // handleFeedback

            // onRemove(flatId)
            router.push('/admin')

        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }            
    }

    const handleEditButtonClick = () => router.push(`/admin/flats/edit/${flat._id}/`)

    return <>
        <Section className='section-scroll'>
            <Div className='min-h-full p-1'>
                <Card>
                    <CardContent flat={flat} />

                    <CardContactInfo />
                    
                    <CardBookingList flat={flat} />

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


    return {
        props: {
            token: token || null,
            flat
        }
    }
}