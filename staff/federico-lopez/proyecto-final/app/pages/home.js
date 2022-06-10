import { retrieveArtistsAndSongs } from "../logic"
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchButton from "../components/SearchButton"

export default function Home() {

    const onFormSubmit = async event => {
        event.preventDefault()

        try {
            const query = event.target.search.value

            const artistsAndSongsResults = await retrieveArtistsAndSongs(query)

            console.log(artistsAndSongsResults)
        } catch (error) {
            console.error(error)
        }
    }

    return <>
        <Header></Header>
        <main>
            <SearchButton></SearchButton>
        </main>
        <Footer></Footer>
    </>
}