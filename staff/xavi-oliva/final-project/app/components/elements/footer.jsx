import Image from 'next/image'
import { AddButton } from '../buttons'
import { useRouter } from 'next/router'

export const Footer = ({ className, ...props }) => {
    const router = useRouter()

    const handleHomeCLick = () => {
        router.push('/admin')
    }

    const handleAddFlatClick = () => {
        router.push('/admin/flats/add-flat')
    }

    return <>
        <footer {...props}
            className={`${className} 
                w-full h-16 bg-white border-t-2 border-t-blue-600 py-2 px-1 shadow-[0_-5px_6px_-1px_rgba(0,0,0,0.1)]`}>
            <nav className="h-full flex justify-around items-center">
                <h3 onClick={handleHomeCLick} className='text-primary font-semibold cursor-pointer'>
                    Apartments
                </h3>
                <AddButton onClick={handleAddFlatClick} />
            </nav>
        </footer>
    </>
}