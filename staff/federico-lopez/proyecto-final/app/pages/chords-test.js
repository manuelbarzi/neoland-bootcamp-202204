import { retrieveArtistsAndSongs } from "../logic"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { generateChordImages, generateInterpretation, getChords } from "../helpers"
import { useState } from "react"

export default function Chords() {
    const [chordView, setChordView] = useState(null)

    const interpretation = 'Bm                      D                G          D\nHay un destino que no tiene pruebas por eso esta historia\nBm                    D             Gb            D\nPuede que muera con una verdad olvidada en tu memoria\nF#(*)                  A\nserá un camino que no tiene huella \nF#(*)                    Bm\nla suerte que le ha tocado a la estrella\nG       D       F#(*)\nque te ha de mirar\nBm                     D                G             D\nHay un siempre para la batalla y la razón que te demora\nBm                   D          G           D\ny hay una sombra para cada luz corras adonde corras \nF#(*)                    A\nquizá el destino sea una mentira\nF#(*)                   Bm           G\nquizá lo único que quería la vida era \nD            F#(*)\nterminar con vos'

    const onChordClick = chord => {

        setChordView(chord)
    }



    return <>
        <Header></Header>
        <main>
            {getChords(interpretation).map(chord => <a className="px-2">{chord}</a>)}
            {generateInterpretation(interpretation, onChordClick)}
            {chordView &&
                <div className="fixed bottom-20 w-full h-2/5 border border-black bg-gray-200 flex overflow-x-scroll">
                    {generateChordImages(chordView)}
                </div>}
        </main>
        <Footer></Footer>
    </>
}