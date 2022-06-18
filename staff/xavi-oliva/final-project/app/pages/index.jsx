import { verifyTokenWithAPICall } from './helpers'
import { Section, Thumbnail, EditButton } from '../components'
import { retrieveFlats } from '../logic'

export default function Home({ token, flats }) { /*flats: _flats*/

  // const flats = [_flats[0], _flats[0], _flats[0], _flats[0], _flats[0]]
  // console.log(_flats[0])

  return <>
    <Section className='section-scroll'> {/* min-h-[calc(100vh-64px-64px)] */}
      <ul className='text-secondary bg-white w-full min-w-[315px]'>
        {flats.map((flat, i) => <li key={flat.id + i}
          className='bg-white inline-flex items-center justify-between
        w-full px-4 py-3 text-xs font-medium border-b-2 border-gray-200'>
          <div className="w-full flex items-center">
            {/* <Thumbnail src={flat.images[0]} className='w-6 h-6 mr-2' /> */}
            <Thumbnail className='w-6 h-6 mr-2' />
            <p className='truncate w-56'>{flat.title}</p>
          </div>
          <EditButton />
        </li>)}
      </ul>
    </Section>
  </>
}

export const getServerSideProps = async ({ req, res }) => {

  const { props: { token } } = await verifyTokenWithAPICall(req, res)

  return {
    props: {
      token,
      flats: await retrieveFlats(token)
    }
  }
}

