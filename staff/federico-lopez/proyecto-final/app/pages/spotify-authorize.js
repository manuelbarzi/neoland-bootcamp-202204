import { FlexColSection, Footer, Header } from "../components";
import { verifyTokenWithAPICall } from "../helpers";
import { getTopArtists, requestSpotifyAccessToken } from "../logic";
import { useState } from "react";

export default function SpotifyAuthorize({ token, topArtists: topArtistsRetrieved }) {
    const [topArtists, setTopArtists] = useState(topArtistsRetrieved)

    return <>
        <Header pageProps="SpotifyAuthorize" />
        <FlexColSection>
            {topArtists && topArtists.length > 0 &&
                <ul>{topArtists.map(artist => <li>{artist.name}</li>)}</ul>
            }
        </FlexColSection>
        <Footer />
    </>
}

export async function getServerSideProps(ctx) {
    const { query: { code, state }, req, res } = ctx
    const token = await verifyTokenWithAPICall(req, res)

    const access_token = await requestSpotifyAccessToken(token, code, state)

    const topArtists = await getTopArtists(token, access_token)
    debugger
    return {
        props: {
            token,
            topArtists
        }
    }
}
