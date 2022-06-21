import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SearchLink, ExploreLink, CreateInterPretationLink } from '../../components'

export function Footer({ userRegistered }) {
    return <footer className="w-full h-20 sticky bottom-0 border-t-2 bg-primary shadow-tertiary shadow-custom-footer py-2" >
        <nav className="flex justify-around items-center">
            <ExploreLink />
            <SearchLink />
            <CreateInterPretationLink />

            {!userRegistered &&
                <Link href="/login">
                    <figure>
                        <Image src="/media/user.svg" height={48} width={48} />
                    </figure>
                </Link>
            }

            {userRegistered &&
                <Link href="/edit-profile">
                    <figure>
                        <Image className="rounded-full" src="/media/profile.jpg" height={48} width={48} />
                    </figure>
                </Link>
            }

        </nav>
    </footer>
}