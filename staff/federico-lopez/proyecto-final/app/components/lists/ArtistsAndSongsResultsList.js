import { ArtistItem, SongItem } from '../../components'

export const ArtistsAndSongsResultsList = ({ className, children, results, songs, ...props }) => {
    return (
        <ul className={`w-11/12 flex flex-col gap-1 list-none ${className}`} {...props}>{children}

            {results && results.artists &&
                    results.artists.map(artist => <ArtistItem artist={artist} />)
            }

            {results && results.songs &&
                results.songs.map(song => <SongItem song={song} showArtist={true} />)
            }
            
            {songs &&
                songs.map(song => <SongItem song={song} />)
            }
        </ul>
    )
}
