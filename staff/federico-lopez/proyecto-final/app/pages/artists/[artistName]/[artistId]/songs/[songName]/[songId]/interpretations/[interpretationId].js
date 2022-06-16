import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Container from '../../../../../../../../components/Container'
import Footer from '../../../../../../../../components/Footer'
import Header from '../../../../../../../../components/Header'
import { generateChordImages, generateInterpretation, getChords } from "../../../../../../../../helpers"
import { retrieveInterpretationFromSong, context } from 'logic'

export default function Interpretation({ interpretation: serverSideInterpretation }) {
    const [chordView, setChordView] = useState(null)
    const [interpretation, setInterpretation] = useState(serverSideInterpretation)

    const router = useRouter()


    let { artistName, artistId, songName, songId, interpretationId } = router.query

    artistName = artistName.split('-').join(' ')
    songName = songName.split('-').join(' ')

    // useEffect(() => {
    //     if (!serverSideInterpretation) {
    //         (async () => {
    //             const interpretationRetrieved = await retrieveInterpretationFromSong(songId, interpretationId)
    //             setInterpretation(interpretationRetrieved)
    //         })()
    //     }
    // }, [])

    const onChordClick = chord => {

        setChordView(chord)
    }

    return <>
        <div className="h-screen flex flex-col">
            <Header></Header>
            <main>
                <Link href={`/artists/${artistName.split(' ').join('-')}/${artistId}/songs/${songName.split(' ').join('-')}/${songId}`}>
                    <a className="block">{songName}</a>
                </Link>

                <Link href={`/artists/${artistName.split(' ').join('-')}/${artistId}`}>
                    <a>{artistName}</a>
                </Link>

                {/* <article> */}

                    {/* <div> {getChords(interpretation.content).map((chord, index) => <a className="px-2" key={index * 10} >{chord}</a>)}
                    </div> */}

                    {generateInterpretation(interpretation.content, onChordClick)}

                    {chordView &&
                        <div className="fixed bottom-20 w-full h-2/5 border border-black bg-gray-200 flex overflow-x-scroll">
                            {generateChordImages(chordView)}
                        </div>}
                {/* </article> */}

                {/* <p>{interpretation.user.username}</p> */}
                {/* {interpretation && <p>{interpretation.content}</p>} */}
            </main>
            <Footer></Footer>
        </div>
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