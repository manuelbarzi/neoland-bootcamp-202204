export const DeleteButton = ({ className, children, ...props }) => {

    return <>
        <figure {...props}
            className={`${className}
            cursor-pointer h-5 w-5 pt-1 text-right`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </figure>
    </>
}