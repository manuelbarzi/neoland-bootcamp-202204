import { EditButton } from '../buttons'

export const HomeList = ({ className, children, ...props }) => {

    return <>
        <li {...props}
            className={`${className} 
            home-list`}>
            <div className="w-fill flex items-center">
                {children}
            </div>
            <EditButton />
        </li>
    </>
}