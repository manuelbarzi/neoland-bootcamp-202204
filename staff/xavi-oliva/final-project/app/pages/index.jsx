import { verifyTokenWithAPICall } from './helpers'

export default function IndexRedirect() { 
  return <>
  </>
}

export const getServerSideProps = async ({ req, res }) => {
  const token = await verifyTokenWithAPICall(req, res)

  if(token) {
    res.writeHead(301, { Location: '/admin' })
    res.end()
  } else {
    res.writeHead(301, { Location: '/login' })
    res.end()
  }
}

