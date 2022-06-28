import { useRouter } from 'next/router'
import { ProfileButton, LogoutButton } from '../buttons'

export const Header = ({ className, ...props }) => {
    const router = useRouter()

    const handleHomeCLick = () => {
        router.push('/admin')
    }

    const handleProfileClick = () => {
        router.push('/profile')
    }
    
    const handleLogoutClick = () => {
        document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        
        router.push('/login')
    }

    return <>
        <header {...props}
            className={`${className} 
                w-full h-16 bg-white border-b-2 border-primary py-2 px-1 shadow-lg`}>
            <nav className="h-full flex justify-between items-center">
                <div className='pl-3'>
                    <h1 onClick={handleHomeCLick} 
                        className='t-logo text-lg cursor-pointer'>Brun's <span className='text-secondary'>Flats</span></h1>
                </div>
                <div className="flex justify-around gap-3.5 pt-1 pr-2.5">
                    <ProfileButton onClick={handleProfileClick} />
                    <LogoutButton onClick={handleLogoutClick} />
                </div>
            </nav>
        </header>
    </>
}