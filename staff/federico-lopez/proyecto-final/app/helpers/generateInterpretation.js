import { CHORD_REGEX } from './constants'
import { validateInterpretationContent } from "validators"
import { Fragment } from 'react'
import { getChords } from './'
import { ButtonBlue, ChordButton } from '../components'

export function generateInterpretation(interpretation, handlerChordClick, handlerRankClick) {
    validateInterpretationContent(interpretation)
    let positions = [], match

    while (match = CHORD_REGEX.exec(interpretation)) {
        positions.push({ firstPosition: match.index, lastPosition: CHORD_REGEX.lastIndex })
    }

    if (positions.length === 0) {
        return <p>{interpretation}</p>
    }

    return <>
        <div className="flex flex-col">

            {/* RANK TEST */}
        <div>
            <p>Rank the interpretation</p>
            <ButtonBlue className="w-5" onClick={function() {
                handlerRankClick(1)
            }}
            >1</ButtonBlue>
            <ButtonBlue className="w-5" onClick={function() {
                handlerRankClick(2)
            }}
            >2</ButtonBlue>
            <ButtonBlue className="w-5" onClick={function() {
                handlerRankClick(3)
            }}
            >3</ButtonBlue>
            <ButtonBlue className="w-5" onClick={function() {
                handlerRankClick(4)
            }}
            >4</ButtonBlue>
            <ButtonBlue className="w-5" onClick={function() {
                handlerRankClick(5)
            }}
            >5</ButtonBlue>
        </div>

        <p>Song chords:</p>
        <div className="flex gap-2">
            {
                getChords(interpretation).map((chord, index) => {
                    return (
                        <ChordButton className="pr-2" key={index * 10}
                            onClick={event => {
                                event.preventDefault()

                                handlerChordClick(chord)
                            }}>{chord}</ChordButton>
                    )
                })
            }
        </div>
        </div>
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
                <ChordButton
                    onClick={event => {
                        event.preventDefault()

                        handlerChordClick(chord)
                    }}
                    className="text-red-400">{chord}
                </ChordButton>

                <>{textLastPart.split('').map((character, index) => {
                    if (character === ' ') return <Fragment key={index * Math.random() * 100}>&nbsp;</Fragment>
                    else if (character === '\n') return <Fragment key={index * Math.random() * 100}><br /></Fragment>
                    else return <Fragment key={index * Math.random() * 100}>{character}</Fragment>
                })}</></ Fragment>
        })}</p>
    </>
}