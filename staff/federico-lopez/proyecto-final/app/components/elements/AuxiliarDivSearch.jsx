import { ArtistIconImage, SongIconImage, InterpretationIconImage } from "../../components"

export function AuxiliarDiv({ className, children, state, type, ...props }) {
    return (
        // <div className={"min-w-fit rounded-3xl px-4 py-4 flex gap-2 justify-center items-center " + (color === "white" ? "bg-myblue" : color === "blue" ? "border-2 border-myblue bg-white" : "bg-white" )}>
        //     {
        //     type === "artist" ? <ArtistIconImage color={color} /> :
        //     type === "song" ? <SongIconImage color={color} /> : 
        //     <InterpretationIconImage color={color} />
        //     }
        //     <p className={color === "white" ? "text-white" : color === "blue" ? "text-myblue font-bold" : "text-[#99CBD8]"} >{type === "artist" ? "Artist" : type === "song" ? "Song" : "Interpretation"}</p>
        // </div>

        <div className="flex flex-col gap-1">
            <p className="font-medium text-myblack">Pick an artist</p>
            {state === 'active' ?
                <div className="w-full px-4 py-3 bg-white border border-inputBg rounded flex gap-2">
                    <SearchImage className="w-5 h-5" />
                    <input className="w-full bg-white focus:outline-none text-sm text-mygrey" type="search" />
                </div>
                :
                state === 'intermediate' ?
                    <div className="w-full px-4 py-3 bg-white border border-inputBg rounded flex gap-2">
                        <SearchImage className="w-5 h-5" />
                        <input className="w-full bg-white focus:outline-none text-sm text-mygrey" type="search" />
                    </div>

                    }
        </div>
    )
}