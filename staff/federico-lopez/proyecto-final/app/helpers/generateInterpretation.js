import { CHORD_REGEX } from './constants'
import { validateInterpretationContent } from "validators"

export function generateInterpretation(interpretation, callback) {
    validateInterpretationContent(interpretation)
    const positions = []
    let match

    while (match = CHORD_REGEX.exec(interpretation)) {
        positions.push({ 'firstPosition': match.index, 'lastPosition': CHORD_REGEX.lastIndex })
    }

    return <p>{positions.map((position, index) => {
        let textFirstPart = ''
        let textLastPart = ''
        if (index === 0) {
            if (position.firstPosition !== 0) {
                textFirstPart = interpretation.slice(0, position.firstPosition)
            }
        } else {
            textFirstPart = interpretation.slice(positions[index - 1].lastPosition, position.firstPosition)
        }

        if (index === positions.length - 1) {
            textLastPart = interpretation.slice(position.lastPosition)
        }

        const chord = interpretation.slice(position.firstPosition, position.lastPosition)

        return <><>{textFirstPart.split('').map((character, index) => {
            if (character === ' ' && textFirstPart[index-1] === ' ') return <>&nbsp;</>
            else if (character === '\n') return <br />
            else return character
        })}</>
            <a onClick={event => {
                event.preventDefault()

                callback(chord)
                }} className="text-red-400">{chord}</a>
            <>{textLastPart.split('').map(character => {
                if (character === ' ') return <>&nbsp;</>
                else if (character === '\n') return <br />
                else return character
            })}</></>
    })}</p>
}