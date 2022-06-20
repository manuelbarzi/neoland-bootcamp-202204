import Link from 'next/link'
import { ExploreImage } from "../../components"

export const ExploreLink = ({ className, children, ...props }) => {
    return (
        <Link href="/" className={`${className}`} {...props}>
            <ExploreImage />
        </Link>
    )
}

