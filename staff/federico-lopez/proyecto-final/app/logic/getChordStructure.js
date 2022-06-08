import guitar from '../data/guitar'

export default function getChordPosition(key, suffix = 'major') {
    const structure = guitar.chords[key].find(chord => chord.suffix === suffix)

    // ...
}