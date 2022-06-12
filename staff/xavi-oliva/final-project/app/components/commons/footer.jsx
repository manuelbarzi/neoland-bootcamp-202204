import Image from 'next/image'
import { AddButton } from '../buttons'

export const Footer = ({ className, ...props }) => {

    return <>
        <footer {...props}
            className={`${className} 
                w-full h-16 bg-white border-t-2 border-t-blue-600 py-2 px-1`}>
            <nav className="h-full flex justify-around items-center">
                <h3 className='text-primary font-semibold'>
                    Apartments
                </h3>
                <AddButton />
            </nav>
        </footer>
    </>
}