import { PrimaryButton, Section, Wrapper, Header, Footer } from "../components";


export default function Home() {
  return <>
    <Wrapper className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <ul>
          <li>
            <figure></figure>
            <p></p>
          </li>
        </ul>
      </main>
      <Footer />
    </Wrapper>
  </>
}
