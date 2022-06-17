import Image from 'next/image'

export const Thumbnail = ({ className, children, src,...props }) => {

    return <>
      <figure {...props}
        className={`${className} 
                  `}>
            <Image src={src || "/media/default-image.png"} height={48} width={48} />
            {children}
      </figure>
    </>
  }