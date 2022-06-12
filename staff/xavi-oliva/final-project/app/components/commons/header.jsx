import Image from 'next/image'
import { ProfileButton, LogoutButton } from '../buttons'

export const Header = ({ className, ...props }) => {

    return <>
        <header {...props}
            className={`${className} 
                w-full h-16 bg-white border-b-2 border-primary py-2 px-1`}>
            <nav className="h-full flex justify-between items-center">
                <figure className='pt-2 pl-3'>
                    <Image src="/media/myhouse.svg" height={36} width={36} />
                </figure>
                <div className="flex justify-around gap-3.5 pt-1 pr-2.5">
                    <ProfileButton />
                    <LogoutButton />
                </div>
            </nav>
        </header>
    </>
}