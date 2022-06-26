import Chord from '@tombatossals/react-chords/lib/Chord'

export const ChordFigure = ({ className, children, chord, instrument, lite, ...props }) => {
    return (
        <figure {...props}
            className={`w-full border py-4 inline ${className}`}>
            {children}

            <Chord
                chord={chord}
                instrument={instrument}
                lite={false}
            />

        </figure>
    )
}