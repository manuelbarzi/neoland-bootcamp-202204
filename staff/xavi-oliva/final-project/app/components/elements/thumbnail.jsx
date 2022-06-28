import Image from 'next/image'

export const Thumbnail = ({ className, children, flat,...props }) => {

    return <>
      <figure {...props}
        className={`${className}`}>
            <Image src={flat.images[0] || "/media/default-image.png"} height={48} width={48} />
            {children}
      </figure>
    </>
  }