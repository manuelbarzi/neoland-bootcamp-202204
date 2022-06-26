import Link from 'next/link'
import { RankImage } from '../images'
import { InterpretationsList } from './InterpretationsList'

export const InterpretationItem = ({ className, children, interpretation, artistName, songName, ...props }) => {
    const rankAmountSum = interpretation.ranks.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.amount
    }, 0)

    const rankAverage = rankAmountSum / interpretation.ranks.length

    return (
        <li className={`w-full h-14 bg-primary shadow-custom-items ${className}`} {...props} key={interpretation.id}>
            <Link
                href={`/artist/${artistName.split(' ').join('-').toLowerCase()}/song/${songName.split(' ').join('-').toLowerCase()}/interpretation/${interpretation.id}`} >
                <a className="w-full h-full px-4 grid grid-cols-[1fr_68px_50px]">
                    <p className="text-mygrey flex items-center">{interpretation.user.username}</p>
                    <div className="pl-2 flex items-center justify-start gap-1">
                        <RankImage className="w-6 h-6 flex items-center justify-center" />
                        <p className="font-medium text-mygrey">{rankAverage ? rankAverage : 'NotRanked'}</p>
                    </div>
                    <p className="text-xs text-mygrey flex items-center justify-end">({interpretation.ranks.length})</p>
                </a>
            </Link>
        </li>
    )

    // return (
    //     <li className={`w-full h-14 bg-primary shadow-custom-items ${className}`} {...props} key={interpretation.id}>
    //         <Link
    //             href={`/artist/${artistName.split(' ').join('-').toLowerCase()}/song/${songName.split(' ').join('-').toLowerCase()}/interpretation/${interpretation.id}`} >
    //             <a className="w-full h-full px-4 grid">
    //                 <p className="text-mygrey">{interpretation.user.username}</p>
    //                 <div className="flex justify-between items-center gap-6">
    //                     <div className="flex items-center gap-1">
    //                         <RankImage className="w-6 h-6 flex items-center justify-center" />
    //                         <p className="font-medium text-mygrey">{rankAverage}</p>
    //                     </div>
    //                     <p className="text-xs text-mygrey">({interpretation.ranks.length})</p>
    //                 </div>
    //             </a>
    //         </Link>
    //     </li>
    // )
}

