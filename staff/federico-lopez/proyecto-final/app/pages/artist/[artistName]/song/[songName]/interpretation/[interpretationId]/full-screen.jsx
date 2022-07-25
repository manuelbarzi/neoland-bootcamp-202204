import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useContext } from "react"
import { Context, CrossGreyImage, Title2, Title3, ChevronLeftImage, Footer, Slider, FlexColSection, InterpretationIconImage, SaveFavoriteImage, AvatarDemoImage, ChordButton, CircleChordButton, ExpandImage, RateYellowImage, RateYellowFullImage, RankInterpretationByUser } from '../../../../../../../components'
import { retrieveInterpretationFromSong, retrieveSong, toggleOrUpdateRankToInterpretation } from '../../../../../../../logic'
import { verifyTokenWithAPICall, getChords, generateInterpretation, generateChordImages } from "../../../../../../../helpers"

export default function FullScreenInterpretation({ token, userId, interpretation, song }) {
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

export async function getServerSideProps({ req, res, params: { songName, artistName, interpretationId } }) {
    const obj = await verifyTokenWithAPICall(req, res)

    const [interpretation, song] = await Promise.all([
        retrieveInterpretationFromSong(songName, artistName, interpretationId),
        retrieveSong(songName, artistName)
    ])

    if (obj) {
        const { token, userId } = obj

        return {
            props: {
                token,
                userId,
                interpretation,
                song,
            }
        }
    } else {
        return {
            props: {
                interpretation,
                song,
            }
        }
    }
}