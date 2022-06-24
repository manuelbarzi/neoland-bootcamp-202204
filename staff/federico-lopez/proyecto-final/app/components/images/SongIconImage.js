import Image from 'next/image'

export const SongIconImage = ({ className, children, grey, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src={grey ? '/media/song-icon-grey.svg' : '/media/song-icon.svg'} height={50} width={50} />
        </figure>
    )
}