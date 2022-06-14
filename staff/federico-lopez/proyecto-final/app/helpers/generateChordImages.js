const { data: { keys, chords } } = require('../data/guitar')
const { GUITAR } = require('./constants')
import Chord from '@tombatossals/react-chords/lib/Chord'

export function generateChordImages(chord) {
    debugger

    let positions

    if (keys.some(key => key === chord)) {
        const chordObjectFounded = chords[chord].find(elem => elem.suffix === 'major')

        positions = chordObjectFounded.positions
    }

    return positions.map(position => {
        const { fingers, frets, barres, capo, baseFret } = position
        return (
            <figure className="px-2 w-full border border-gray-600"><Chord
                chord={{ frets, fingers, barres, capo, baseFret }}

                instrument={GUITAR}

                lite={false}
            /></figure>
        )
    })
}
