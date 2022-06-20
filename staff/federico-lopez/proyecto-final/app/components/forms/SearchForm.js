import { Input, SearchImage } from '../../components'

export function SearchForm({ className, children, onChangeInput, onCancelClick, ...props }) {
    return (
        <form className={`my-2 w-11/12 h-14 py-2 px-2 rounded-md flex items-center justify-between gap-2 bg-secondary ${className}`} >
            <SearchImage />
            <Input className="bg-secondary border-0 placeholder-black placeholder-opacity-50 text-lg" type="search" placeholder="Artists or songs"
                onChange={onChangeInput} />
            <button type="reset" onClick={onCancelClick}>Cancel</button>
        </form>
    )
}