import Image from 'next/image'

export const Logo = ({ className, ...props }) => {

    return (
        <figure className={`${className}`} {...props} >
            <img className="opacity-100" src="/media/logo.png">
            </img>
        </figure>
    )
}