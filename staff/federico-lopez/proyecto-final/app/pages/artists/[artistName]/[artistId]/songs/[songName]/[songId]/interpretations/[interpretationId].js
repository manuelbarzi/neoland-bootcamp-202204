import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Footer from '../../../../../../../../components/Footer'
import { retrieveInterpretationFromSong, context } from 'logic'

export default function Interpretation({ interpretation: serverSideInterpretation }) {
    const router = useRouter()

    const [interpretation, setInterpretation] = useState(serverSideInterpretation)

    let { artistName, artistId, songName, songId, interpretationId } = router.query

    artistName = artistName.split('-').join(' ')
    songName = songName.split('-').join(' ')

    useEffect(() => {
        if (!serverSideInterpretation) {
            (async () => {
                const interpretationRetrieved = await retrieveInterpretationFromSong(songId, interpretationId)
                setInterpretation(interpretationRetrieved)
            })()
        }
    }, [])

    return <>
        {/* <header className="w-full h-20 fixed top-0 border-b-2 py-2 px-4">
    </header> */}
        <main>
            <Link href={`/artists/${artistName.split(' ').join('-')}/${artistId}/songs/${songName.split(' ').join('-')}/${songId}`}>
                <a className="block">{songName}</a>
            </Link>

            <Link href={`/artists/${artistName.split(' ').join('-')}/${artistId}`}>
                <a>{artistName}</a>
            </Link>
            {/* <p>{interpretation.user.username}</p> */}
            {interpretation && <p>{interpretation.content}</p>}
        </main>
        <Footer></Footer>
    </>
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`${context.API_URL}/songs/${params.songId}/interpretations/${params.interpretationId}`)

    if (res.ok) {
        let interpretation = await res.json()
        return {
            props: {
                interpretation
            }
        }
    }
}