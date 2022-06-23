import Image from 'next/image'

export const Logo = ({ className, ...props }) => {

    return (
        <figure className={`w-72 h-72 rounded-full bg-white flex items-center justify-center ${className}`} {...props} >
            <img className="w-48" src="/media/logo.png">
            </img>
        </figure>
    )
}