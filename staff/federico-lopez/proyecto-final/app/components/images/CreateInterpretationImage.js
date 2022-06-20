import Image from 'next/image'

export const CreateInterpretationImage = ({ className, children, ...props }) => {
    return (
        <figure className={`${className}`} {...props}>
            <Image src="/media/plus.svg" height={50} width={50} />
        </figure>
    )
}