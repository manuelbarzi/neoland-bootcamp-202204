import Image from 'next/image'

export const FavoriteImage = ({ className, children, ...props }) => {
    return (
        <figure className={`flex items-center justify-center ${className}`} {...props}>
            <Image src="/media/favorite.svg" height={20} width={22} />
        </figure>
    )
}