import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header({ pageProps }) {
    const [page, usePage] = useState(pageProps)

    return <header className="w-full h-20 fixed top-0 border-b-2 py-2 px-4" >
        <nav className="h-full flex justify-between items-center">

            {!page &&
                <figure>
                    <Image src="/media/music.svg" height={50} width={50} ></Image>
                </figure>}

            {page === 'profile' &&
                <p className="text-3xl">Profile</p>}

            <div className="flex justify-around gap-2">
                <figure>
                    <Image src="/media/bell.svg" height={50} width={50} />
                </figure>
                <Link href="/create-interpretation">
                    <figure>
                        <Image src="/media/plus.svg" height={50} width={50} />
                    </figure>
                </Link>
            </div>
        </nav>
    </header>
}