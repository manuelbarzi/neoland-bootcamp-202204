import Image from 'next/image'
import { Header, Footer, CommonMain, Container, Card, PrimaryButton } from "../components";


export default function Apartment() {
    return <>
        <div className="flex flex-col h-screen">
            <Header />
            <CommonMain>
                <Container>
                    <Card>
                        <h2 className=' text-primary text-sm py-2 font-semibold'>
                            Spacious apartment in downtown area
                        </h2>
                        <h4 className='text-xs text-gray-400 pb-4'>
                            Eixample Esquerra, Barcelona
                        </h4>
                        <figure className='pb-4'>
                            <Image src="/media/default-image.png" layout='responsive' width='400' height='225'
                                className='object-contain w-full h-full relative' />
                        </figure>
                        <p className='text-[13px] text-gray-600 pb-4'>
                            Apartament located in the heart of the city centre, balcony overlooking Muntaner street. Metro and bus within easy reach. 2 bedrooms and a bathroom. TV, wifi, air conditioning, heating, washing machine and lift.
                        </p>
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
                            <PrimaryButton>Save</PrimaryButton>
                        </div>
                    </Card>
                </Container>
            </CommonMain>
            <Footer />
        </div>
    </>
}