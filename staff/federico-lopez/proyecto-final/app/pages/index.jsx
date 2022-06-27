import { Dialog, FlexColSection, Footer, Header, Context, Title2 } from "../components"
import { verifyTokenWithAPICall } from "../helpers"
import { checkSpotifySession, getTopArtists } from '../logic'
import { useContext, useState } from "react"
import Link from "next/link";

const querystring = require('query-string');

export default function Home({ token, isSessionActive, topArtists }) {
  const [dialogOpen, setDialogOpen] = useState(false)

  const { handleDialog } = useContext(Context)

  if (!dialogOpen && !isSessionActive) {
    handleDialog({
      title: 'Personalize your experience!',
      description: 'Connect now your Spotify account to easily find your favorites songs and artists.',
      button1: 'Connect with Spotify',
      button2: 'Not now'
    })

    setDialogOpen(true)
  }

  return (
    <div className="flex flex-col h-screen">
      <Header title="Explore" />

      <FlexColSection className="bg-primary flex-1 overflow-y-auto">

        {topArtists &&
          <div className="py-4 w-full flex flex-col gap-2">
            <h2 className="px-4 text-xl font-bold text-mygrey">Most listened in Spotify</h2>

            <ul className="px-4 flex items-center overflow-x-auto scrollbar-hide gap-2">

              {topArtists.map((artist, index) => {
                return (

                  <li className="min-w-[112px] h-28 bg-gradient-orange rounded-lg"
                    key={index}>
                      <Link href={`/artist/${artist.name}`}>
                      <a className="w-full h-full p-2 flex items-end text-xl font-bold text-white">{artist.name}</a>
                      </Link>
                  </li>

                )
              })}

            </ul>
          </div>
        }
      </FlexColSection>

      <Footer userLoggedIn={!!token} page="home" />
    </div>
  )
}

export async function getServerSideProps(ctx) {
  debugger
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
