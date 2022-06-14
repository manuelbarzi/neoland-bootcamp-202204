import { retrieveArtistsAndSongs } from "../logic"
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBar from "../components/SearchBar"
import Cookies from 'cookies'

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
            <SearchBar></SearchBar>
        </main>
        <Footer></Footer>
    </>
}

Home.getInitialProps = async ({ req, res }) => {

    const cookies = new Cookies(req, res)

    const token = cookies.get('token')

    const response = await fetch('http://localhost:8080/api/users/auth', {
        method: 'GET',
        headers: {
            'Authorization': `bearer ${token}`
        }
    })

    // if (response.status !== 200) {
    //     res.writeHead(301, { Location: "/login" })
    //     res.end()
    // }
}

