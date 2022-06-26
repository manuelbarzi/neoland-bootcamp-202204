import Image from 'next/image'

export const BellImage = ({ className, children, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src="/media/bell.svg" height={50} width={50} />
        </figure>
    )
}