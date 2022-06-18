export const SecondaryButton = ({ className, children, ...props }) => {

    return (
        <button {...props}
            className={`w-4/5 h-10 rounded-3xl bg-secondary text-center text-base font-bold ${className}`}>
            {children}
        </button>
    )
}