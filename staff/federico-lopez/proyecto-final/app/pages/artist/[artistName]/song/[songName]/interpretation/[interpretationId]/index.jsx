import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useContext } from "react"
import { Context, Title, Title2, Title3, ChevronLeftImage, Footer, Slider, FlexColSection, InterpretationIconImage, SaveFavoriteImage, CircleChordButton, ExpandImage, RateYellowFullImage, RankInterpretationByUser } from '../../../../../../../components'
import { retrieveInterpretationFromSong, retrieveSong, retrieveUser, toggleOrUpdateRankToInterpretation } from '../../../../../../../logic'
import { verifyTokenAndRedirect, getChords, generateInterpretation, generateChordImages, calculateInterpretationRankAverage } from "../../../../../../../helpers"

export default function Interpretation({ token, userId, interpretation, song, interpreterId, user }) {
    const router = useRouter()

    const { handleFeedback } = useContext(Context)

    const [chordView, setChordView] = useState(null)

    const rankByUserRetrieved = interpretation.ranks.find(rank => rank.user.toString() === userId)

    const [rankByUser, setRankByUser] = useState(rankByUserRetrieved ? rankByUserRetrieved.amount : null)

    const artistName = song.artist.name
    const songName = song.name
    const username = interpretation.user.username

    const rankAverage = calculateInterpretationRankAverage(interpretation.ranks)

    const onBackClick = () => router.back()

    const onChordClick = chord => setChordView(chord)

    const onCloseChordClick = () => setChordView(null)

    const onRankClick = async amount => {
        try {
            await toggleOrUpdateRankToInterpretation(token, song.id, interpretation.id, amount)

            if (rankByUser === amount) {
                handleFeedback('success', 'Rate', `You have deleted your previous rating`)

                setRankByUser(null)
            } else if (rankByUser !== null) {
                handleFeedback('success', 'Rate', `You have change your rating form ${rankByUser} to ${amount}`)

                setRankByUser(amount)
            } else {
                handleFeedback('success', 'Rate', `You have rated this interpretation with ${amount}`)

                setRankByUser(amount)
            }
        } catch (error) {
            handleFeedback('error', 'Rate failed', error.message)
        }
    }

    return (
        <>
            <div className={'flex flex-col h-screen' + (chordView ? ' brightness-50' : '')}>
                <header className="w-full bg-white px-4 pt-4 pb-1 gap-4 shadow-custom-items z-50">
                    <div className="flex flex-col gap-4">
                        <button className="w-8 h-8" onClick={onBackClick} >
                            <ChevronLeftImage />
                        </button>
                        <div className="flex flex-col justify-between gap-2">
                            <div className="flex gap-2">
                                <InterpretationIconImage className="w-6 h-6 flex items-center justify-center" color="grey" />
                                <Title2>Interpretation</Title2>
                            </div>
                            <div className="flex justify-between items-center">
                                <Title>{song.name}</Title>
                                <SaveFavoriteImage className="w-8 h-8 -mb-1" />
                            </div>
                        </div>
                        <Link href={`/profile/${username}`}>
                            <a className="w-fit flex items-center gap-1">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={`http://localhost:8080/api/users/${interpreterId}/image`}
                                />
                                <Title3 className="mb-3">{username}</Title3>
                            </a>
                        </Link>
                    </div>
                </header>

                <div className="bg-primary flex-1 overflow-y-auto ">
                    <FlexColSection className="px-4 items-center">

                        <div className="w-full py-4 flex flex-col gap-2">
                            <h3 className="flex items-center text-xl text-myblack font-bold">Chords</h3>
                            <div className="w-full flex flex-wrap gap-2">
                                {getChords(interpretation.content).map((chord, index) => {
                                    return (
                                        <CircleChordButton key={index * 10}
                                            onClick={event => {
                                                event.preventDefault()

                                                onChordClick(chord)
                                            }}>{chord}</CircleChordButton>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex justify-between items-center">
                                <p className="text-xl font-bold my-grey">Interpretation</p>

                                <Link href={`/artist/${artistName.split(' ').join('-').toLowerCase()}/song/${songName.split(' ').join('-').toLowerCase()}/interpretation/${interpretation.id}/full-screen`} >
                                    <a><ExpandImage className="w-8 h-8" /></a>
                                </Link>

                            </div>

                            <article className="w-full p-2 h-64 border border-inputBg bg-white overflow-y-scroll">

                                {generateInterpretation(interpretation.content, onChordClick)}

                            </article>
                        </div>

                        <div className="mt-4 w-full flex flex-col gap-4">
                            <div className="w-full flex flex-col gap-2">
                                <p className="text-xl font-bold">Rating</p>
                                <div className="w-full border border-inputBorder rounded-3xl flex flex-col gap-2">
                                    <div className="p-4 flex flex-col items-center gap-2">
                                        <div className="flex justify-center items-center gap-1">
                                            <RateYellowFullImage className="-z-1 w-10 h-10" />
                                            <p className={'font-bold leading-tight max-w-[80px]' + (rankAverage ? ' text-3xl' : ' text-md')}>{rankAverage ? rankAverage : 'Not Ranked'}</p>
                                        </div>

                                        <p className="text-xs text-mygrey">Reviews</p>
                                    </div>
                                </div>
                            </div>

                            {userId !== interpretation.user._id &&
                                <RankInterpretationByUser onRankClick={onRankClick} userLoggedIn={userId ? true : false} rankByUser={rankByUser} />
                            }

                        </div>

                    </FlexColSection>
                </div>
                <Footer user={user} />
            </div>
            {chordView &&
                <Slider chord={chordView} onCloseChordClick={onCloseChordClick} >
                    {generateChordImages(chordView)}
                </Slider>}
        </>
    )
}

export async function getServerSideProps({ req, res, params: { songName, artistName, interpretationId } }) {
    const token = await verifyTokenAndRedirect(req, res)

    const [interpretation, song] = await Promise.all([
        retrieveInterpretationFromSong(songName, artistName, interpretationId),
        retrieveSong(songName, artistName)
    ])

    const interpreterId = interpretation.user._id

    if (token) {
        const user = await retrieveUser(token)

        return { props: { token, user, userId, interpretation, song, interpreterId } }

    } else return { props: { interpretation, song, interpreterId } }
}