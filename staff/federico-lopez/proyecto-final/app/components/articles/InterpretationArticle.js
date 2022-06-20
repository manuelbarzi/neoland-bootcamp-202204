import { useRouter } from 'next/router'
import { generateInterpretation, generateChordImages } from "../../helpers"
import { Slider, ArtistLink, SongLink } from '../../components'

export const InterpretationArticle = ({ className, children, interpretation, artistName, song, onChordClick, chordView, hrefLinkSong, hrefLinkArtist, ...props }) => {
    
    const router = useRouter()

    return (
        <article {...props}
            className={`flex flex-col justify-start gap-4 ${className}`}>
            {children}

            <div className="flex flex-col">
            <SongLink href={hrefLinkSong} >
                <a className="block">{song.name}</a>
            </SongLink>

            <ArtistLink href={hrefLinkArtist}>
                {song.artist.name}
            </ArtistLink>
            </div>
            {generateInterpretation(interpretation.content, onChordClick)}

            {chordView &&
                <Slider>
                    {generateChordImages(chordView)}
                </Slider>}

        </article >
    )
}