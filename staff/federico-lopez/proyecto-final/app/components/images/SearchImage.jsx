import Image from 'next/image'

export const SearchImage = ({ className, children, pageOn, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src={pageOn ? '/media/search-on.svg': '/media/search-off.svg'} height={40} width={40} />
        </figure>
    )
}