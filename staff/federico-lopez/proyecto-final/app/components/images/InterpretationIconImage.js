import Image from 'next/image'

export const InterpretationIconImage = ({ className, children, grey, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src="/media/interpretation-icon.svg" height={21} width={18} />
        </figure>
    )
}