import { Header, CommonMain, HomeList, Footer } from "../components"
import { verifyTokenWithAPICall } from './helpers'
import { retrieveUser, retrieveFlats } from "logic"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

export default function Home({ token }) {
  const [name, setName] = useState(null)
  
  

  return <>
    <div className="flex flex-col h-screen">
      <Header />
      <CommonMain>
        <HomeList>{name}</HomeList>
      </CommonMain>
      <Footer />
    </div>
  </>
}

export async function getServerSideProps({ req, res }) {
  return await verifyTokenWithAPICall(req, res)
}