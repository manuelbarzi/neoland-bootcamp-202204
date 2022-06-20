import Image from 'next/image'

export const ExploreImage = ({ className, children, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src="/media/globe.svg" height={48} width={48} />
        </figure>
    )
}