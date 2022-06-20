import Link from 'next/link'

export const SongItem = ({ className, children, song, showArtist, ...props }) => {
    return (
        <li className={`w-full h-14 bg-secondary shadow-sm shadow-tertiary rounded-md ${className}`} {...props} key={song.id}>
            <Link href={`/artist/${song.artist.name.split(' ').join('-').toLowerCase()}/song/${song.name.split(' ').join('-').toLowerCase()}`}>
                <button className="w-full h-full flex flex-col justify-center">

                    {showArtist && <>
                        <p className="px-2">{song.name}</p>
                        <p className="px-2 text-sm">Artist: {song.artist.name}</p>
                    </>}

                    {!showArtist &&
                        <p className="px-2">{song.name}</p>
                    }

                </button>
            </Link>
        </li>
    )
}