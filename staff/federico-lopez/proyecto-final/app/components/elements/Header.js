import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { BellImage } from '../../components'

export function Header({ pageProps }) {
    return <header className="w-full h-20 sticky top-0 z-50 bg-primary border-b-2 shadow-custom-header shadow-tertiary py-2 px-4" >
        <nav className="h-full flex justify-between items-center">

            {pageProps &&
                <p className="w-4/5 text-2xl text-tertiary font-medium">{pageProps}</p>}

            <div className="flex justify-around gap-2">
                <BellImage />
            </div>
        </nav>
    </header>
}