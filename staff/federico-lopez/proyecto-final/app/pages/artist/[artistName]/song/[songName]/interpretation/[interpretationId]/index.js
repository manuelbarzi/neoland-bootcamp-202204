import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Footer from '../../../../../../../components/Footer'
import Header from '../../../../../../../components/Header'
import { generateChordImages, generateInterpretation, getChords } from "../../../../../../../helpers"
import { retrieveInterpretationFromSong, retrieveSong } from 'logic'

export default function Interpretation({ interpretation: serverSideInterpretation, song }) {
    const [chordView, setChordView] = useState(null)
    const [interpretation, setInterpretation] = useState(serverSideInterpretation)

    const router = useRouter()

    const onChordClick = chord => {

        setChordView(chord)
    }

    return <>
        <div className="h-screen flex flex-col">
            <Header></Header>
            <main>
                <Link href={`/artist/${song.artist.name.split(' ').join('-')}/song/${song.name.split(' ').join('-')}`}>
                    <a className="block">{song.name}</a>
                </Link>

                <Link href={`/artist/${song.artist.name.split(' ').join('-')}`}>
                    <a>{song.artist.name}</a>
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
    const [interpretation, song] = await Promise.all([
        retrieveInterpretationFromSong(params.songName, params.artistName, params.interpretationId),
        retrieveSong(params.songName, params.artistName)
    ])

    return {
        props: {
            interpretation,
            song
        }
    }
}