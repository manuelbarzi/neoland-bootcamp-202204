import Image from 'next/image'
import { Div, Card, PrimaryButton, Section, CardContent } from "../../components";
import { retrieveFlat } from '../../logic'
import Apium from 'apium'
import { verifyTokenWithAPICall } from '../helpers'


export default function Flat({token, flat}) {
    // TODO

    return <>
        <Section className='section-scroll'>
            <Div className='min-h-full p-1'>
                <Card>
                    <CardContent flat={flat}/>

                    <div className='card-group flex flex-row content-start gap-4 pb-4'>
                        <div className='left basis-1/2'>
                            <h3 className='text-[13px] font-semibold text-primary'>
                                Contact Phone
                            </h3>
                            <h3 className='text-[13px] text-gray-600'>
                                687 966 017
                            </h3>
                        </div>
                        <div className='right basis-1/2'>
                            <h3 className='text-[13px] font-semibold text-primary'>
                                Contact Email
                            </h3>
                            <h3 className='text-[13px] text-gray-600'>
                                brun@flats.com
                            </h3>
                        </div>
                    </div>
                    <div className='pb-4'>
                        <div className='pb-2'>
                            <h3 className='text-[13px] font-semibold text-primary'>
                                Booking list:
                            </h3>

                        </div>
                        <ul className='text-xs text-gray-600 divide-y-2 border-y border-primary'>
                            <li className='inline-flex items-center justify-between w-full py-3'>
                                <h4 className='w-fill flex items-center'>Pepito - t.622 255 234</h4>
                                <h4>Del 01/07/2022 al 10/07/2022</h4>
                            </li>
                            <li className='inline-flex items-center justify-between w-full py-3'>
                                <h4 className='w-fill flex items-center'>Francisca - t.675 105 388</h4>
                                <h4>Del 15/07/2022 al 17/07/2022</h4>
                            </li>
                            <li className='inline-flex items-center justify-between w-full py-3'>
                                <h4 className='w-fill flex items-center'>Ramon - t.688 222 456</h4>
                                <h4>Del 23/07/2022 al 06/08/2022</h4>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-row basis-auto gap-2'>
                        <PrimaryButton className='bg-red-500'>Delete</PrimaryButton>
                        <PrimaryButton>Edit</PrimaryButton>
                    </div>
                </Card>
            </Div>
        </Section>
    </>
}

export async function getServerSideProps({ req, res, params: { flatId }}) {
    const api = new Apium('http://localhost:8080/api')

    const token = await verifyTokenWithAPICall(req, res)
    const flat = await retrieveFlat(token, flatId)


    return {
        props: {
            token: token || null,
            flat
        }
    }
}