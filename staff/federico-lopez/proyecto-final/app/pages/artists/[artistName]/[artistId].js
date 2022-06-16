import { useRouter } from 'next/router'
import Link from 'next/link'
// import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { retrieveSongsOfArtist } from '../../../logic'
import { context } from '../../../logic/context'
import { useEffect, useState } from 'react'
import Header from '../../../components/Header'

export default function Artist({ songs: serverSideSongs }) {
    const router = useRouter()

    const [songs, setSongs] = useState(serverSideSongs)

    let { artistName, artistId } = router.query

    artistName = artistName.split('-').join(' ')

    // useEffect(() => {
    //     if (!serverSideSongs) {
    //         (async () => {
    //             const songsRetrieved = await retrieveSongsOfArtist(artistId)

    //             setSongs(songsRetrieved)
    //         })()
    //     }
    // }, [])

    return <>
        <Header></Header>
        <main>
            <p>{artistName}</p>
            {songs.length > 0 && songs.map(song => {
                return <li className="w-11/12 h-14 bg-gray-200 flex items-center justify-start" key={song.id}>
                    <Link href={`/artists/${artistName.split(' ').join('-')}/${artistId}/songs/${song.name.split(' ').join('-')}/${song.id}`} >
                        <a className="px-2">{song.name}</a>
                    </Link>
                </li>
            })}
        </main>
        <Footer></Footer>
    </>
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`${context.API_URL}/songs/artist/${params.artistId}`)

    if (res.ok) {
        let songs = await res.json()
        return {
            props: {
                songs
            }
        }
    }
}