import { Header, CommonMain, HomeList, Footer } from "../components"
import { verifyTokenWithAPICall } from './helpers'


export default function Home({ token }) {

  

  return <>
    <div className="flex flex-col h-screen">
      <Header />
      <CommonMain>
        <HomeList></HomeList>
      </CommonMain>
      <Footer />
    </div>
  </>
}

export async function getServerSideProps({ req, res }) {
  return verifyTokenWithAPICall(req, res)
}