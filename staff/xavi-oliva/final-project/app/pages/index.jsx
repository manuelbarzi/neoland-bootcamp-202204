import { Header, CommonMain, HomeList, Thumbnail, Footer } from "../components"


export default function Home() {
  return <>
    <div className="flex flex-col h-screen">
      <Header />
      <CommonMain>
        <ul className="text-secondary bg-white w-screen">
          <HomeList>
            <Thumbnail className='w-6 h-6 mr-2' />
            <p>Spacious apartment in downtown area</p>
          </HomeList>
        </ul>
      </CommonMain>
      <Footer />
    </div>
  </>
}
