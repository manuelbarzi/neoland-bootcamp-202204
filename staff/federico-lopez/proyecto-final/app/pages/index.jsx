import { Feedback, FlexColSection, Footer, Header } from "../components";
import { verifyTokenWithAPICall } from "../helpers";
import { checkSpotifySession, getTopArtists } from '../logic'
const querystring = require('query-string');

export default function Home({ token, isSessionActive, topArtists }) {
  const client_id = '93f6f6ebc007423fa83d846f4713a03a'
  const redirect_uri = 'http://localhost:3000/'

  const state = Math.random() * 10000;
  const scope = 'user-read-private user-read-email user-top-read user-read-recently-played user-read-playback-position playlist-read-collaborative user-read-playback-state user-follow-read user-read-currently-playing user-library-read playlist-read-private'


  return <>
    <Header pageProps="Explore" />

    {topArtists &&
      topArtists.map(artist => <li>{artist.name}</li>
      )}

    <FlexColSection>

      {!isSessionActive && <a className="p-24 text-2xl-red-800" href={`https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })}`} >Spotify Login</a>
      }

    </FlexColSection>
    <Footer userLoggedIn={!!token} page="home" />
  </>
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx
  const obj = await verifyTokenWithAPICall(req, res)

  if (obj) {
    const { token } = obj
    
    if (ctx.query.code) {
      debugger
      const isSessionActive = await checkSpotifySession(token, ctx.query.code)

      if (isSessionActive) {
        const topArtists = await getTopArtists(token)

        return {
          props: {
            'token': token,
            'topArtists': topArtists,
            'isSessionActive': isSessionActive
          }
        }

      } else {
        return {
          props: {
            'token': token,
            'isSessionActive': isSessionActive
          }
        }
      }
    } else {
      const isSessionActive = await checkSpotifySession(token)

      if (isSessionActive) {
        const topArtists = await getTopArtists(token)

        return {
          props: {
            'token': token,
            'topArtists': topArtists,
            'isSessionActive': isSessionActive
          }
        }
      } else {
        return {
          props: {
            'token': token,
            'isSessionActive': isSessionActive
          }
        }
      }
    }
  } else {
    return {
      props: {}
    }
  }
}
