import Image from 'next/image'
import mypic from '../../public/media/default-image.png'

export const CardContent = ({ className, children, flat, ...props }) => {

    return <>
        <h2 className=' text-primary text-sm py-2 font-semibold'>
            {flat.title}
        </h2>
        <h4 className='text-xs text-gray-400 pb-4'>
            {flat.address}
        </h4>
        <figure className='pb-4'>
            <Image src={mypic} layout='responsive' width='400' height='225'
                className='object-contain w-full h-full relative' />
            {/* <Image src={flat.images} layout='responsive' width='400' height='225'
                className='object-contain w-full h-full relative' /> */}
        </figure>
        <p className='text-[13px] text-gray-600 pb-4'>
            {flat.description}
        </p>
    </>
}