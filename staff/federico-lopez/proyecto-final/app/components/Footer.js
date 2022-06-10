import Image from 'next/image'

export default function Footer() {
    
    return <footer className="w-full h-20 fixed bottom-0 border-t-2 py-2" >
        <nav className="flex justify-around items-center">
        <figure>
            <Image src="/media/globe.svg" height={48} width={48}/>
        </figure>
        <figure>
            <Image src="/media/search.svg" height={48} width={48}/>
        </figure>
        <figure>
            <Image src="/media/user.svg" height={48} width={48}/>
        </figure>
        </nav>
    </footer>
}