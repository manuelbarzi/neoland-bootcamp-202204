import { useRouter } from 'next/router'
import { ArtistsAndSongsResultsList, FlexColSection, Footer, Header } from '../../../components'
import { retrieveSongsOfArtist } from 'logic'
import { useState } from 'react'

export default function Artist({ songs: songsRetrieved }) {
    const router = useRouter()
    
    const [songs, setSongs] = useState(songsRetrieved)
    
    const artist = songs[0].artist.name
    
    return <>
        <Header pageProps={artist} />
        <FlexColSection className="items-center">
            <ArtistsAndSongsResultsList songs={songs} />
        </FlexColSection>
        <Footer />
    </>
}

export async function getServerSideProps({ params }) {
    const songs = await retrieveSongsOfArtist(params.artistName)

    return {
        props: {
            songs
        }
    }
}