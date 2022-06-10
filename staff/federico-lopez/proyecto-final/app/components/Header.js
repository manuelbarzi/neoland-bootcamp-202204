import Image from 'next/image'

export default function Header() {

    return <header className="w-full h-20 fixed top-0 border-b-2 py-2 px-4" >
        <nav className="h-full flex justify-between items-center">
            <figure>
                <Image src="/media/music.svg" height={50} width={50} ></Image>
            </figure>
            <div className="flex justify-around gap-2">
                <figure>
                    <Image src="/media/bell.svg" height={50} width={50} />
                </figure>
                <figure>
                    <Image src="/media/plus.svg" height={50} width={50} />
                </figure>
            </div>
        </nav>
    </header>
}