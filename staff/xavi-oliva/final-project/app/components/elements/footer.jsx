import Image from 'next/image'
import { AddButton } from '../buttons'
import { useRouter } from 'next/router'

export const Footer = ({ className, ...props }) => {
    const router = useRouter()

    const handleHomeCLick = () => {
        router.push('/')
    }

    const handleAddFlatClick = () => {
        router.push('/flat/add-flat')
    }

    return <>
        <footer {...props}
            className={`${className} 
                w-full h-16 bg-white border-t-2 border-t-blue-600 py-2 px-1`}>
            <nav className="h-full flex justify-around items-center">
                <h3 onClick={handleHomeCLick} className='text-primary font-semibold cursor-pointer'>
                    Apartments
                </h3>
                <AddButton onClick={handleAddFlatClick} />
            </nav>
        </footer>
    </>
}