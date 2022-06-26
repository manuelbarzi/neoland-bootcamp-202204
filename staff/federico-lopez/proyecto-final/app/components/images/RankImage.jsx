import Image from 'next/image'

export const RankImage = ({ className, children, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src="/media/rank.svg" height={18.05} width={18.78} />
        </figure>
    )
}