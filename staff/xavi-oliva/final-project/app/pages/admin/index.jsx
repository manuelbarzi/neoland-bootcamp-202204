import { verifyTokenWithAPICall } from '../helpers'
import { Section, Thumbnail, EditButton } from '../../components'
import { retrieveFlats } from 'logic'
import Link from 'next/link'

export default function Home({ token, flats }) { 

  return <>
    <Section className='section-scroll mt-1'> {}
      <ul className='text-secondary bg-white w-full min-w-[315px]'>
        {flats.map((flat, i) => <li key={flat.id + i}
          className='bg-white inline-flex items-center justify-between
        w-full px-4 py-3 text-xs font-medium border-b-2 border-gray-200'>
          <div className="w-full flex items-center">
            <Link href={`/flats/${flat.id}/`}>
              <a className='contents'>
                <Thumbnail className='w-6 h-6 mr-2' />
                <p className='truncate w-56'>{flat.title}</p>
              </a>
            </Link>
          </div>
          <EditButton />
        </li>)}
      </ul>
    </Section>
  </>
}

export const getServerSideProps = async ({ req, res }) => {

  const token = await verifyTokenWithAPICall(req, res)

  return {
    props: {
      token,
      flats: await retrieveFlats(token)
    }
  }
}

