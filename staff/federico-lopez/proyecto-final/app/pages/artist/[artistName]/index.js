import { useRouter } from 'next/router'
import Link from 'next/link'
// import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { retrieveSongsOfArtist } from 'logic'
import { context } from 'logic/context'
import { useEffect, useState } from 'react'
import Header from '../../../components/Header'

export default function Artist({ songs: songsRetrieved }) {
    const router = useRouter()

    const [songs, setSongs] = useState(songsRetrieved)

    return <>
        <Header></Header>
        <main>
            <p>{songs[0].artist.name}</p>
            
            {songs.length > 0 && songs.map(song => {
                return <li className="w-11/12 h-14 bg-gray-200 flex items-center justify-start" key={song.id}>
                    <Link href={`/artist/${songs[0].artist.name.split(' ').join('-').toLowerCase()}/song/${song.name.split(' ').join('-')}`} >
                        <a className="px-2">{song.name}</a>
                    </Link>
                </li>
            })}
        </main>
        <Footer></Footer>
    </>
}

export async function getServerSideProps({ params }) {
    const songs = await retrieveSongsOfArtist(params.artistName)

    return {
        props: {
            songs
        }
    }
}