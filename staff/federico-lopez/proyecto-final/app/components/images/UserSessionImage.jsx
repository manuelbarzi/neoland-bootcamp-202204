import Image from 'next/image'

export const UserSessionImage = ({ className, children, pageOn, ...props }) => {
    return (
        <figure className={`w-10 h-10 ${className}`} {...props}>
            <Image src={pageOn ? '/media/user-session-on.svg': '/media/user-session-off.svg'} height={40} width={40} />
        </figure>
    )
}