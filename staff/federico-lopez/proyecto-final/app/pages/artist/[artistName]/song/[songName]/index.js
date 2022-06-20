import { Header, Footer, FlexColSection, InterpretationsList, ArtistLink } from '../../../../../components'
import { retrieveSong, retrieveInterpretationsFromSong, context } from '../../../../../logic'
import Apium from '../../../../../vendor/Apium'

export default function Song({ interpretations, song }) {
    const artistName = song.artist.name

    return <>
        <Header pageProps={song.name} />
        <FlexColSection class="items-center">
            <ArtistLink href={`/artist/${artistName}/`}>
                {artistName}
            </ArtistLink>

            {interpretations.length > 0 &&
                <InterpretationsList interpretations={interpretations} artistName={artistName} songName={song.name} />
            }

            {interpretations.length === 0 && <p>There are not available interpretations for this song</p>}

        </FlexColSection>
        <Footer />
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