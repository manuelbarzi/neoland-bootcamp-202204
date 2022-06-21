import { FlexColSection, Footer, Header } from "../components";
import { verifyTokenWithAPICall } from "../helpers";
const querystring = require('query-string');

export default function Home({ token }) {

  const client_id = '93f6f6ebc007423fa83d846f4713a03a'
  const redirect_uri = 'http://localhost:3000/spotify-authorize'

  const state = Math.random() * 10000;
  const scope = 'user-read-private user-read-email user-top-read user-read-recently-played user-read-playback-position playlist-read-collaborative user-read-playback-state user-follow-read user-read-currently-playing user-library-read playlist-read-private'


  return <>
    <Header pageProps="Explore" />

    {token && <a href={`https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    })}`} >Spotify Login</a>
    }

    <FlexColSection />
    <Footer userRegistered={!!token} />
  </>
}

export async function getServerSideProps({ req, res }) {
  const token = await verifyTokenWithAPICall(req, res)

  if(token){
    return {
      props: { token }
    }
  } else {
    return {
      props: {}
    }
  }
}