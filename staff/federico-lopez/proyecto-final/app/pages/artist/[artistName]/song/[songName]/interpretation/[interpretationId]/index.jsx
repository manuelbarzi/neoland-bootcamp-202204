import { useState } from "react"
import { Header, Footer, FlexColSection, InterpretationArticle } from '../../../../../../../components'
import { retrieveInterpretationFromSong, retrieveSong, toggleOrUpdateRankToInterpretation } from 'logic'
import { verifyTokenWithAPICall } from "../../../../../../../helpers"

export default function Interpretation({ token, interpretation, song }) {
    const [chordView, setChordView] = useState(null)

    const artistName = song.artist.name

    const onChordClick = chord => setChordView(chord)

    const onRankClick = async amount => {
        debugger
        await toggleOrUpdateRankToInterpretation(token, song.id, interpretation.id, amount)
    }

    return <>
        <Header pageProps={`${song.name} by ${interpretation.user.username}`} />
        <FlexColSection className="p-4 items-center">
            <InterpretationArticle
                interpretation={interpretation}
                artistName={artistName}
                song={song}
                onChordClick={onChordClick}
                onRankClick={onRankClick}
                chordView={chordView}
                hrefLinkSong={`/artist/${artistName.split(' ').join('-')}/song/${song.name.split(' ').join('-')}`}
                hrefLinkArtist={`/artist/${song.artist.name.split(' ').join('-')}`} />

        </FlexColSection>
        <Footer />
    </>
}

export async function getServerSideProps({ req, res, params: { songName, artistName, interpretationId } }) {
    debugger
    const token = await verifyTokenWithAPICall(req, res)

    const [interpretation, song] = await Promise.all([
        retrieveInterpretationFromSong(songName, artistName, interpretationId),
        retrieveSong(songName, artistName)
    ])

    if(token) {
        return {
            props: {
                token,
                interpretation,
                song
            }
        }
    } else {
        return {
            props: {
                interpretation,
                song
            }
        }
    }
}