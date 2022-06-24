import Image from 'next/image'

export const ChevronLeftImage = ({ className, children, pageOn, ...props }) => {
    return (
        <figure className={`flex items-center justify-center ${className}`} {...props}>
            <Image src="/media/chevron-left.svg" height={11.22} width={6.94} />
        </figure>
    )
}