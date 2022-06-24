import Link from 'next/link'
import { Title, Title2, Title3, ChevronLeftImage, SongIconImage, FavoriteImage, Footer, FlexColSection, InterpretationsList, Tag } from '../../../../../components'
import { retrieveSong, retrieveInterpretationsFromSong, context } from '../../../../../logic'
import Apium from '../../../../../vendor/Apium'

export default function Song({ interpretations, song }) {
    const artistName = song.artist.name

    return <>
        <header className="w-full fixed top-0 bg-white p-4 gap-4 shadow-custom-items">
            <div className="flex flex-col">
                <ChevronLeftImage className="w-8 h-8" />
                <div className="flex flex-col justify-between gap-2">
                    <div className="flex gap-2">
                        <SongIconImage className="w-6 h-6" grey={true} />
                        <Title2>Song</Title2>
                    </div>
                    <div className="flex justify-between items-center">
                        <Title>{song.name}</Title>
                        <FavoriteImage className="w-6 h-6" />
                    </div>
                    <div>
                    </div>
                </div>
                <Link href={`/artist/${artistName}`}>
                    <a>
                        <Title3>{artistName}</Title3>
                    </a>
                </Link>
                <div className="flex gap-2 overflow-x-scroll">
                    <Tag active={true} >guitar</Tag>
                    <Tag>ukelele</Tag>
                    <Tag>bass</Tag>
                    <Tag>piano</Tag>
                    <Tag>trumpet</Tag>
                </div>
            </div>
        </header>

        <FlexColSection class="py-36 items-center">

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