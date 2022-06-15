import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer({ userRegistered }) {
    const [user, setUser] = useState(userRegistered)

    return <footer className="w-full h-20 fixed bottom-0 border-t-2 py-2" >
        <nav className="flex justify-around items-center">

            <figure>
                <Image src="/media/globe.svg" height={48} width={48} />
            </figure>

            <figure>
                <Image src="/media/search.svg" height={48} width={48} />
            </figure>

            {!user &&
                <Link href="/login">
                    <figure>
                        <Image src="/media/user.svg" height={48} width={48} />
                    </figure>
                </Link>
            }

            {user &&
                <Link href="/edit-profile">
                    <figure>
                        <Image className="rounded-full" src="/media/profile.jpg" height={48} width={48} />
                    </figure>
                </Link>
            }

        </nav>
    </footer>
}