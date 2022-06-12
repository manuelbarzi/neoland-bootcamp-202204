import { EditButton } from '../buttons'

export const ProfileListButton = ({ className, children, ...props }) => {

    return <>
        <button {...props}
            className={`${className} 
            home-list`}>
            <div className="w-fill flex items-center">
                {children}
            </div>
            <EditButton />
        </button>
    </>
}