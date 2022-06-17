import { retrieveArtistsAndSongs } from "../logic"
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBar from "../components/SearchBar"
import { verifyTokenWithAPICall } from '../helpers'

export default function Home({ token }) {

    const onFormSubmit = async event => {
        event.preventDefault()

        const query = event.target.search.value
        
        try {
            const artistsAndSongsResults = await retrieveArtistsAndSongs(query)

            console.log(artistsAndSongsResults)
        } catch (error) {
            console.error(error)
        }
    }

    return <>
        <Header></Header>
        <main>
            <SearchBar></SearchBar>
        </main>
        <Footer userRegistered={!!token}></Footer>
    </>
}


export async function getServerSideProps({ req, res }) {
    return verifyTokenWithAPICall(req, res)
}