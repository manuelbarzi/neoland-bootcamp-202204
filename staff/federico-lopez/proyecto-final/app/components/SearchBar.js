import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { retrieveArtistsAndSongs } from '../logic'

export default function SearchBar() {
    const [artistsAndSongs, setArtistsAndSongs] = useState(null)

    const onFormSubmit = event => {
        event.preventDefault()
    }

    const onChangeQuery = async event => {
        const query = event.target.value

        if (query) {
            const artistsAndSongsFounded = await retrieveArtistsAndSongs(query)

            setArtistsAndSongs(artistsAndSongsFounded)
        } else {
            setArtistsAndSongs(null)
        }
    }

    return <>
        <section className="w-full flex flex-col items-center justify-center gap-1">
            <div className="my-2 w-11/12 h-14 py-2 px-2 flex items-center justify-between gap-2 rounded bg-gray-200">
                <figure className="h-12 w-12">
                    <Image src="/media/search.svg" width={48} height={48} ></Image>
                </figure>
                <form className="w-2/3 h-11/12" onSubmit={onFormSubmit} >
                    <input className="w-full text-2xl bg-gray-200" type="search" placeholder="Artists or songs" onChange={onChangeQuery}></input>
                </form>
                <a>Cancel</a>
            </div>
            {artistsAndSongs && artistsAndSongs.artists && artistsAndSongs.artists.map(artist => {
                return <li className="w-11/12 h-14 bg-gray-200" key={artist.id}>
                    <Link href={`/artist/${artist.name.split(' ').join('-').toLowerCase()}`}>
                        <a className="px-2 w-full h-full flex items-center justify-start" >{artist.name}</a>
                    </Link>
                </li>
            })}
            {artistsAndSongs && artistsAndSongs.songs && artistsAndSongs.songs.map(song => {
                return <li className="w-11/12 h-14 bg-gray-200 " key={song.id}>
                    <Link href={`/artist/${song.artist.name.split(' ').join('-').toLowerCase()}/songs/${song.name.split(' ').join('-').toLowerCase()}`}>
                        <a className="w-full h-full flex flex-col justify-center">
                            <p className="px-2">{song.name}</p>
                            <p className="px-2 text-sm">Artist: {song.artist.name}</p>
                        </a>
                    </Link>
                </li>
            })}
        </section>
    </>
}