import Header from '../components/Header'
import Footer from '../components/Footer'
import { verifyTokenWithAPICall } from './helpers'

export default function CreateInterpretation() {

    return <>
        <Header></Header>
        <main>
            <form className="w-2/3 h-11/12" onSubmit={onFormSubmit} >
                <input className="w-full text-2xl bg-gray-200" type="search" placeholder="Artists or songs" onChange={onChangeQuery}></input>
            </form>
        </main>
        <Footer></Footer>
    </>
}

export async function getServerSideProps({ req, res }) {
    return verifyTokenWithAPICall(req, res)
}