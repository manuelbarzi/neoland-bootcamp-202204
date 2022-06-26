import Image from 'next/image'

export const ArtistIconImage = ({ className, children, grey, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src={grey ? "/media/artist-icon-grey.svg" : "/media/artist-icon.svg"} height={50} width={50} />
        </figure>
    )
}