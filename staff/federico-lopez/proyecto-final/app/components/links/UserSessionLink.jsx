import Link from 'next/link'
import { UserSessionImage } from ".."

export const UserSessionLink = ({ className, children, userLoggedIn, pageOn, ...props }) => {
    return (
        <Link href={userLoggedIn ? '/edit-profile' : '/login'} className={`${className}`} {...props}>
            <UserSessionImage pageOn={pageOn} />
        </Link>
    )
}