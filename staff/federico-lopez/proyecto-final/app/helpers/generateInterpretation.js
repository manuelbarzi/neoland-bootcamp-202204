import { CHORD_REGEX } from './constants'
import { validateInterpretationContent } from "validators"
import { Fragment } from 'react'
import { getChords } from './'

export function generateInterpretation(interpretation, callback) {
    validateInterpretationContent(interpretation)
    let positions = [], match
    
    while (match = CHORD_REGEX.exec(interpretation)) {
        positions.push({ firstPosition: match.index, lastPosition: CHORD_REGEX.lastIndex })
    }

    // positions = positions.map(position => {
    //     if(interpretation.slice(position.firstPosition, position.lastPosition +1).includes('º')){
    //         return { firstPosition: position.firstPosition, lastPosition: position.lastPosition + 1}
    //     } else {
    //         return position
    //     }
    // })
    if (positions.length === 0) {
        return <article><p>{interpretation}</p></article>
    }

    return <article>
        <p>
            {
                getChords(interpretation).map((chord, index) => {
                    return <button className="px-2" key={index * 10}
                        onClick={event => {
                            event.preventDefault()

                            callback(chord)
                        }}>{chord}</button>
                })
            }
        </p>

        {/* <div> {getChords(interpretation.content).map((chord, index) => <a className="px-2" key={index * 10} >{chord}</a>)}
                    </div> */}

        <p>{positions.map((position, index) => {
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

            return <Fragment key={index * 100}><>{textFirstPart.split('').map((character, index) => {
                if (character === ' ' && textFirstPart[index - 1] === ' ') return <Fragment key={index * Math.random() * 100}>&nbsp;</Fragment>
                else if (character === '\n') return <Fragment key={index * Math.random() * 100}><br /></Fragment>
                else return <Fragment key={index * Math.random() * 100}>{character}</Fragment>
            })}</>
                <button onClick={event => {
                    event.preventDefault()

                    callback(chord)
                }} className="text-red-400">{chord}</button>
                <>{textLastPart.split('').map((character, index) => {
                    if (character === ' ') return <Fragment key={index * Math.random() * 100}>&nbsp;</Fragment>
                    else if (character === '\n') return <Fragment key={index * Math.random() * 100}><br /></Fragment>
                    else return <Fragment key={index * Math.random() * 100}>{character}</Fragment>
                })}</></ Fragment>
        })}</p>
    </article >
}