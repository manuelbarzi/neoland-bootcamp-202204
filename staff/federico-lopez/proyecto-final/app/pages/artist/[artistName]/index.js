import { useRouter } from 'next/router'
import { ArtistIconImage, ArtistsAndSongsResultsList, ChevronLeftImage, FavoriteImage, FlexColSection, Footer, Title2, Title, ButtonBlue } from '../../../components'
import { retrieveSongsOfArtist } from 'logic'
import { useState } from 'react'

export default function Artist({ songs: songsRetrieved }) {
    const router = useRouter()

    const [songs, setSongs] = useState(songsRetrieved)

    const artist = songs[0].artist.name

    const onBackClick = () => {
        router.back()
    }

    return <>
        <header className="w-full fixed top-0 bg-white p-4 gap-4 shadow-custom-items">
            <div className="flex flex-col">
                <ChevronLeftImage className="w-8 h-8" onClick={onBackClick} />
                <div className="flex flex-col justify-between gap-2">
                    <div className="flex gap-2">
                        <ArtistIconImage className="w-6 h-6" grey={true} />
                        <Title2>Artist</Title2>
                    </div>
                    <div className="flex justify-between items-center">
                        <Title>{artist}</Title>
                        <FavoriteImage className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </header>

        <FlexColSection className="py-36 items-center">
            <div className="w-full h-14 px-4 bg-primary flex items-center justify-between">
                <h3 className="text-xl text-myblack font-bold">Songs</h3>
                <ButtonBlue>Add New Song</ButtonBlue>
            </div>
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