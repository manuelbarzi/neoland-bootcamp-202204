import Link from 'next/link'
import { SearchImage } from "../../components"

export const SearchLink = ({ className, children, ...props }) => {
    return (
        <Link href="/search" className={`${className}`} {...props}>
            <SearchImage />
        </Link>
    )
}