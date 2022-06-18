import { EditButton } from '../buttons'

export const ProfileListButton = ({ className, children, ...props }) => {

    return <>
        <button {...props}
            className={`${className} 
            relative bg-white inline-flex items-center justify-between
        w-full px-4 py-3 text-xs font-medium border-b-2 border-gray-200
        hover:bg-gray-100 hover:text-gray-800 focus:z-10 focus:ring-2
        focus:ring-blue-700 focus:text-blue-700`}>
            <div className="w-fill flex items-center">
                {children}
            </div>
            <EditButton />
        </button>
    </>
}