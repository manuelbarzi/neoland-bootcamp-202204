import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SearchLink, HomeLink, CreateInterPretationLink, UserSessionLink } from '../../components'

export function Footer({ userLoggedIn, page }) {
    const [pageHome, setPageHome] = useState(false)
    const [pageSearch, setPageSearch] = useState(false)
    const [pageCreateInterpretation, setPageCreateInterpretation] = useState(false)
    const [pageUserSession, setPageUserSession] = useState(false)

    useEffect(() => {
        switch (page) {
            case 'home':
                setPageHome(true)
                break;
            case 'search':
                setPageSearch(true)
                break;
            case 'create-interpretation':
                setPageCreateInterpretation(true)
                break;
            case 'user-session':
                setPageUserSession(true)
                break;
        }
    }, [])


    // return <footer className="w-full h-20 fixed bottom-0 bg-white shadow-custom-footer flex justify-center" >
    //     <nav className="w-4/5 flex justify-between items-center">
    //         <HomeLink pageOn={pageHome} />
    //         <SearchLink pageOn={pageSearch} />
    //         <CreateInterPretationLink pageOn={pageCreateInterpretation }/>
    //         <UserSessionLink userLoggedIn={userLoggedIn} pageOn={pageUserSession} />
    //     </nav>
    // </footer>

    return <footer className="w-full h-20 bg-white shadow-custom-footer flex justify-center" >
        <nav className="w-4/5 flex justify-between items-center">
            <HomeLink pageOn={pageHome} />
            <SearchLink pageOn={pageSearch} />
            <CreateInterPretationLink pageOn={pageCreateInterpretation }/>
            <UserSessionLink userLoggedIn={userLoggedIn} pageOn={pageUserSession} />
        </nav>
    </footer>


}