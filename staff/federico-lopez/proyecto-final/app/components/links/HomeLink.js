import Link from 'next/link'
import { HomeImage } from ".."

export const HomeLink = ({ className, children, pageOn, ...props }) => {
    return (
        <Link href="/" className={`${className}`} {...props}>
            <HomeImage pageOn={pageOn} />
        </Link>
    )
}

