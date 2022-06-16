import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Footer from '../../../../../../components/Footer'
import { retrieveInterpretationFromSong, context } from 'logic'
import Header from '../../../../../../components/Header'

export default function Song({ interpretations: serverSideinterpretations }) {
    const router = useRouter()

    const [interpretations, setInterpretations] = useState(serverSideinterpretations)

    let { artistName, artistId, songName, songId } = router.query

    artistName = artistName.split('-').join(' ')
    songName = songName.split('-').join(' ')

    // useEffect(() => {
    //     if (!interpretations) {
    //         (async () => {
    //             const interpretationsRetrieved = await retrieveInterpretationsFromSong(songId)

    //             setInterpretations(interpretationsRetrieved)
    //         })()
    //     }
    // }, [])

    return <>
        <Header></Header>
        <main>
            <p>{songName}</p>

            <Link href={`/artists/${artistName.split(' ').join('-')}/${artistId}`}>
                <a>{artistName}</a>
            </Link>

            {interpretations.length > 0 && interpretations.map(interpretation => {
                return <li className="w-11/12 h-14 bg-gray-200" key={interpretation.id}>
                    <Link
                        href={`/artists/${artistName.split(' ').join('-')}/${artistId}/songs/${songName.split(' ').join('-')}/${songId}/interpretations/${interpretation.id}`} >
                        <a className="w-full h-full flex items-center justify-start px-2">{`By ${interpretation.user.username}`}</a>
                    </Link>
                </li>
            })}

            {interpretations.length === 0 && <p>There are not available interpretations for this song</p>}

        </main>
        <Footer></Footer>
    </>
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`${context.API_URL}/songs/${params.songId}`)

    if (res.ok) {
        let interpretations = await res.json()
        return {
            props: {
                interpretations
            }
        }
    }
}