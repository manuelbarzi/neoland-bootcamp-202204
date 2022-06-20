import { InterpretationItem } from '../../components'

export const InterpretationsList = ({ className, children, interpretations, artistName, songName, ...props }) => {
    return (
        <ul className={`m-0 w-11/12 flex flex-col gap-1 list-none ${className}`} {...props}>{children}

            {interpretations.length > 0 && interpretations.map(interpretation => {
                return <InterpretationItem interpretation={interpretation} artistName={artistName} songName={songName} />
            })
            }
        

        </ul>
    )
}
