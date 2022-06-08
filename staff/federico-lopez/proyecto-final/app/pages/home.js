import { retrieveArtistsAndSongs } from "../logic"

export default function Home() {

    const onFormSubmit = async event => {
        event.preventDefault()

        try {
            const query = event.target.search.value
    
            const artistsAndSongsResults = await retrieveArtistsAndSongs(query)

            console.log(artistsAndSongsResults)
        } catch(error) {
            console.error(error)
        }
    }

    return <>
        <form onSubmit={onFormSubmit}>
            <input type="search" name="search" id="search"></input>
            <button type="submit">SEARCH</button>
        </form>
    </>
}