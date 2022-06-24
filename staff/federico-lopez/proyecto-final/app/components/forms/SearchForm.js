import { Input, SearchImage } from '../../components'

export function SearchForm({ className, children, onChangeInput, onCancelClick, ...props }) {
    return (
        <form className={`w-full h-10 flex items-center justify-between gap-2 ${className}`} >
            <div className="w-full border border-inputBorder rounded-lg bg-inputBg pl-4 flex items-center">
                <SearchImage className="w-6 h-6" />
                <Input className="bg-inputBg border-inputBg focus:outline-none placeholder-black placeholder-opacity-50 text-lg" type="search" placeholder="Artists or songs"
                    onChange={onChangeInput} />
            </div>
            <button className="font-bold text-myblue" type="reset" onClick={onCancelClick}>Cancel</button>
        </form>
    )
}