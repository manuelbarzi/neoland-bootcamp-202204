import { EditButton } from '../buttons'
import { Thumbnail } from '../elements'

export const HomeList = ({ className, children, ...props }) => {

    return <>
        <ul {...props}
            className={`${className} 
            text-secondary bg-white w-screen`}>
            <li className='home-list'>
                <div className="w-fill flex items-center">
                    <Thumbnail className='w-6 h-6 mr-2' />
                    <p>Spacious apartment in downtown area</p>
                    {children}
                </div>
                <EditButton />
            </li>
        </ul>
    </>
}