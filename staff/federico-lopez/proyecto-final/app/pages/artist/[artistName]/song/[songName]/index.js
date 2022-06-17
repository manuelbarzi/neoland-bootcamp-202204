import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Footer from '../../../../../components/Footer'
import { retrieveSong, retrieveInterpretationsFromSong, context } from '../../../../../logic'
import Header from '../../../../../components/Header'
import Apium from '../../../../../vendor/Apium'

export default function Song({ interpretations: interpretationsRetrieved, song: songRetrieved }) {
    const [interpretations, setInterpretations] = useState(interpretationsRetrieved)

    return <>
        <Header></Header>
        <main>
            <p>{songRetrieved.name}</p>

            <Link href={`/artists/${songRetrieved.artist.name.split(' ').join('-').toLowerCase()}/`}>
                <a>{songRetrieved.artist.name}</a>
            </Link>

            {interpretations.length > 0 && interpretations.map(interpretation => {
                return <li className="w-11/12 h-14 bg-gray-200" key={interpretation.id}>
                    <Link
                        href={`/artist/${songRetrieved.artist.name.split(' ').join('-').toLowerCase()}/song/${songRetrieved.name.split(' ').join('-').toLowerCase()}/interpretation/${interpretation.id}`} >
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
    const api = new Apium(context.API_URL)

    const [interpretations, song] = await Promise.all([
        retrieveInterpretationsFromSong(params.songName, params.artistName),
        retrieveSong(params.songName, params.artistName)
    ])

    return {
        props: {
            interpretations,
            song
        }
    }
}