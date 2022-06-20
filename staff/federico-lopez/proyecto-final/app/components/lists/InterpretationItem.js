import Link from 'next/link'

export const InterpretationItem = ({ className, children, interpretation, artistName, songName, ...props }) => {
    return (
        <li className={`w-full h-14 bg-secondary shadow-sm shadow-tertiary rounded-md ${className}`} {...props} key={interpretation.id}>
            <Link
                href={`/artist/${artistName.split(' ').join('-').toLowerCase()}/song/${songName.split(' ').join('-').toLowerCase()}/interpretation/${interpretation.id}`} >
                <a className="w-full h-full flex items-center justify-start px-2">{`By ${interpretation.user.username}`}</a>
            </Link>
        </li>
    )
}

