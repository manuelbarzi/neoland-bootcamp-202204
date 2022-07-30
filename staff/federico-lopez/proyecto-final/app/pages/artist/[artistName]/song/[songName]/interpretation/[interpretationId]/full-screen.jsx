import Link from 'next/link'
import { useState } from "react"
import { CrossGreyImage, Slider, RankInterpretationByUser } from '../../../../../../../components'
import { retrieveInterpretationFromSong, retrieveSong } from '../../../../../../../logic'
import { generateInterpretation, generateChordImages } from "../../../../../../../helpers"

export default function FullScreenInterpretation({ interpretation, song }) {
    const [chordView, setChordView] = useState(null)

    const songName = song.name
    const artistName = song.artist.name

    const onChordClick = chord => setChordView(chord)

    const onCloseChordClick = () => setChordView(null)

    return (
        <>
            <div className={`flex flex-col justify-center gap-2 bg-primary h-screen m-0 p-4` + (chordView ? ' brightness-50' : '')}>
                <header className="flex justify-between shrink-0">
                    <h1 className="font-bold text-xl text-mygrey">{songName}</h1>
                    <Link href={`/artist/${artistName.split(' ').join('-').toLowerCase()}/song/${songName.split(' ').join('-').toLowerCase()}/interpretation/${interpretation.id}`}>
                        <a>
                            <CrossGreyImage className="w-8 h-8 flex justify-center align-center" />
                        </a>
                    </Link>
                </header>
                <main className="h-full m-0 border border-inputBg bg-white p-2 flex-1 overflow-auto">
                    {generateInterpretation(interpretation.content, onChordClick)}
                </main>
            </div>

            {chordView &&
                <Slider chord={chordView} onCloseChordClick={onCloseChordClick} >
                    {generateChordImages(chordView)}
                </Slider>}
        </>
    )
}

export async function getServerSideProps({ params: { songName, artistName, interpretationId } }) {
    const [interpretation, song] = await Promise.all([
        retrieveInterpretationFromSong(songName, artistName, interpretationId),
        retrieveSong(songName, artistName)
    ])

    return { props: { interpretation, song } }
}