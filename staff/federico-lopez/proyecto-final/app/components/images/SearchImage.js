import Image from 'next/image'

export const SearchImage = ({ className, children, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src="/media/search.svg" height={48} width={48} />
        </figure>
    )
}