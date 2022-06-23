import Link from 'next/link'
import { SearchImage } from "../../components"

export const SearchLink = ({ className, children, pageOn, ...props }) => {
    return (
        <Link href="/search" className={`${className}`} {...props}>
            <SearchImage pageOn={pageOn} />
        </Link>
    )
}