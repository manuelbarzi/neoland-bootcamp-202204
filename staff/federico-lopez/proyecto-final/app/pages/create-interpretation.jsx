import { Header, Footer, FlexColSection, SearchImage, SongIconImage, AuxiliarDiv } from '../components'
import { verifyTokenWithAPICall } from '../helpers'
import { retrieveArtists, retrieveSongsOfArtist, addInterpretationToSong, createSong, createArtist } from '../logic'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function CreateInterpretation({ token }) {
    const [queryArtist, setQueryArtist] = useState(false)
    const [artistsDisplayed, setArtistsDisplayed] = useState(null)
    const [artist, setArtist] = useState(null)

    const [songsOfArtist, setSongsOfArtist] = useState(null)
    const [songsDisplayed, setSongsDisplayed] = useState(null)
    const [song, setSong] = useState(null)

    const router = useRouter()

    const step = 1

    const onChangeQueryArtist = async event => {
        const query = event.target.value

        if (query) {
            try {
                setQueryArtist(true)
                const artists = await retrieveArtists(query)

                setArtistsDisplayed(artists)
            } catch (error) {
                console.error(error)
            }

        } else {
            setQueryArtist(false)
            setArtistsDisplayed(null)
        }
    }

    const onClickCreateArtist = event => {
        event.preventDefault()

        const artistName = event.target.artist.value

        setArtist({ name: artistName })
        setArtistsDisplayed(null)
    }

    const onClickArtist = async artistChosen => {
        setArtist(artistChosen)
        setArtistsDisplayed(null)

        try {
            const songs = await retrieveSongsOfArtist(artistChosen.name)

            if (songs.length > 0) {
                setSongsOfArtist(songs)
                setSongsDisplayed(songs)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onClickChangeArtist = () => {
        setArtist(null)
        setSongsOfArtist(null)
        setSongsDisplayed(null)
        if (song) setSong(null)
    }

    const onClickCreateSong = event => {
        event.preventDefault()

        setSong({ name: event.target.song.value })
        setSongsDisplayed(null)
    }

    const onChangeQuerySong = async event => {
        const query = event.target.value

        if (query) {
            if (songsOfArtist != null) {
                const songsFounded = songsOfArtist.filter(songOfArtist => songOfArtist.name.toLowerCase().includes(query.toLowerCase()))

                if (songsFounded.length === 0)
                    setSongsDisplayed(null)
                else
                    setSongsDisplayed(songsFounded)
            }
        } else {
            setSongsDisplayed(songsOfArtist)
        }
    }

    const onClickSong = async songChosen => {
        setSong(songChosen)
        setSongsDisplayed(null)
    }

    const onClickChangeSong = () => {
        setSong(null)
        setSongsDisplayed(songsOfArtist)
    }

    const onSubmitInterpretation = async event => {
        event.preventDefault()

        const content = event.target.textarea.value

        if (!artist.id) {
            debugger
            artist.id = await createArtist(token, artist.name)
        }

        if (!song.id) {
            song.id = await createSong(token, { artist: artist.id, name: song.name })
        }

        const interpretationId = await addInterpretationToSong(token, song.id, content)

        router.push(`/artists/${artist.name}/${artist.id}/songs/${song.name}/${song.id}/interpretations/${interpretationId}`)
    }

    // return <>
    //     <Header />
    //     <FlexColSection>
    //         {!artist &&
    //             <form className="w-2/3 h-11/12"
    //                 onSubmit={onClickCreateArtist}
    //             >
    //                 <input className="w-full text-2xl bg-gray-200" type="search" name="artist" id="artist" placeholder="Artist"
    //                     onChange={onChangeQueryArtist}
    //                 ></input>
    //                 {queryArtist && artistsDisplayed && artistsDisplayed.length === 0 &&
    //                     <>
    //                         <p>We don't have interpretations for this artist. Want to create?</p>
    //                         <button type="submit">Accept</button>
    //                     </>
    //                 }
    //             </form>}

    //     </FlexColSection>
    //     <Footer />
    // </>
    return <>
        <Header title="Add New" />
        <FlexColSection className="bg-primary">

            <div className="w-full p-4 flex gap-2">
                {
                    step === 1 ?
                        <>
                            <AuxiliarDiv color="blue" type="artist" />
                            <AuxiliarDiv color="light-blue" type="song" />
                            <AuxiliarDiv color="light-blue" type="interpretation" />
                        </>
                        :
                        step === 2 ?
                            <>
                                <AuxiliarDiv color="white" type="artist" />
                                <AuxiliarDiv color="blue" type="song" />
                                <AuxiliarDiv color="light-blue" type="interpretation" />
                            </>
                            :
                            <>
                                <AuxiliarDiv color="white" type="artist" />
                                <AuxiliarDiv color="white" type="song" />
                                <AuxiliarDiv color="blue" type="interpretation" />
                            </>
                }
            </div>

            <div className="px-4">
                <div className="flex flex-col gap-1">
                    <p className="font-medium text-myblack">Pick an artist</p>
                    <div className="w-full px-4 py-3 bg-white border border-inputBg rounded flex gap-2">
                    <SearchImage className="w-5 h-5" />
                    <input className="w-full bg-white focus:outline-none text-sm text-mygrey" type="search" />
                    </div>
                </div>
            </div>

            </FlexColSection>


            {/* <main>

                {!artist &&
                    <form className="w-2/3 h-11/12"
                        onSubmit={onClickCreateArtist}
                    >
                        <input className="w-full text-2xl bg-gray-200" type="search" name="artist" id="artist" placeholder="Artist"
                            onChange={onChangeQueryArtist}
                        ></input>
                        {queryArtist && artistsDisplayed && artistsDisplayed.length === 0 &&
                            <>
                                <p>We don't have interpretations for this artist. Want to create?</p>
                                <button type="submit">Accept</button>
                            </>
                        }
                    </form>}

                {artistsDisplayed &&
                    artistsDisplayed.map(artist => {
                        return <li className="w-11/12 h-14 bg-gray-200" key={artist.id}>
                            <button className="px-2 w-full h-full flex items-center justify-start"
                                onClick={
                                    event => {
                                        event.preventDefault()

                                        onClickArtist(artist)
                                    }}
                            >{artist.name}
                            </button>
                        </li>
                    })
                }

                {artist &&
                    <div>
                        <p className="inline">Artist: {artist.name}</p>
                        <button className="mx-1 bg-gray-200"
                            onClick={onClickChangeArtist}
                        >Change</button>
                    </div>
                }

                {artist && !song &&
                    <form className="w-2/3 h-11/12"
                        onSubmit={onClickCreateSong}
                    >
                        <input className="w-full text-2xl bg-gray-200" type="search" name="song" id="song" placeholder="Song"
                            onChange={onChangeQuerySong}>
                        </input>
                        {!songsDisplayed &&
                            <>
                                <p>We don't have interpretations for this song. Want to create the first version?</p>
                                <button type="submit">Accept</button>
                            </>
                        }
                    </form>}

                {songsDisplayed &&
                    songsDisplayed.map(song => {
                        return <li className="w-11/12 h-14 bg-gray-200" key={song.id}>
                            <button className="px-2 w-full h-full flex items-center justify-start"
                                onClick={
                                    event => {
                                        event.preventDefault()

                                        onClickSong(song)
                                    }}
                            >{song.name}
                            </button>
                        </li>
                    })
                }

                {artist && song &&
                    <div>
                        <p className="inline">Song: {song.name}</p>
                        <button className="mx-1 bg-gray-200"
                            onClick={onClickChangeSong}
                        >Change</button>
                    </div>
                }

                {artist && song &&
                    <form
                        onSubmit={onSubmitInterpretation}
                    >
                        <textarea className="w-96 h-96" name="textarea" placeholder="write your interpretation here"></textarea>
                        <button type="submit">Save</button>
                    </form>
                }

            </main>
            <Footer userLoggedIn={true} page="create-interpretation" /> */}
        </>
}

        export async function getServerSideProps({req, res}) {
    const token = await verifyTokenWithAPICall(req, res)

        return {
            props: {token}
    }
}