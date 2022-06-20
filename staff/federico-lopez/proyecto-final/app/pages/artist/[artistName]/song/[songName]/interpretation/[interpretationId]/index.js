import { useState } from "react"
import { Header, Footer, FlexColSection, InterpretationArticle } from '../../../../../../../components'
import { retrieveInterpretationFromSong, retrieveSong } from 'logic'

export default function Interpretation({ interpretation, song }) {
    const [chordView, setChordView] = useState(null)
    const artistName = song.artist.name


    const onChordClick = chord => setChordView(chord)

    return <>
        <Header pageProps={`${song.name} by ${interpretation.user.username}`} />
        <FlexColSection className="p-4 items-center">
            <InterpretationArticle
                interpretation={interpretation}
                artistName={artistName}
                song={song}
                onChordClick={onChordClick}
                chordView={chordView}
                hrefLinkSong={`/artist/${artistName.split(' ').join('-')}/song/${song.name.split(' ').join('-')}`}
                hrefLinkArtist={`/artist/${song.artist.name.split(' ').join('-')}`} />

        </FlexColSection>
        <Footer />
    </>
}

export async function getServerSideProps({ params: { songName, artistName, interpretationId } }) {
    const [interpretation, song] = await Promise.all([
        retrieveInterpretationFromSong(songName, artistName, interpretationId),
        retrieveSong(songName, artistName)
    ])

    return {
        props: {
            interpretation,
            song
        }
    }
}