import Link from 'next/link'

export const ArtistItem = ({ className, children, artist, ...props }) => {
    return (
        <li className={`w-full h-14 bg-secondary shadow-sm shadow-tertiary rounded-md ${className}`} {...props} key={artist.id}>
            <Link href={`/artist/${artist.name.split(' ').join('-').toLowerCase()}`}>
                <button className="px-2 w-full h-full flex items-center justify-start" >{artist.name}</button>
            </Link>
        </li>
    )
}