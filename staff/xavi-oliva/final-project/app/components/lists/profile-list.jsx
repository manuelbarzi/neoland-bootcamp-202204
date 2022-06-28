import { EditButton } from '../buttons'

export const ProfileListButton = ({ className, children, ...props }) => {

    return <>
        <button {...props}
            className={`${className} 
            relative bg-white inline-flex items-center justify-between w-full px-4 py-3 text-xs font-medium`}>
            <div className="w-fill flex items-center">
                {children}
            </div>
            <EditButton />
        </button>
    </>
}