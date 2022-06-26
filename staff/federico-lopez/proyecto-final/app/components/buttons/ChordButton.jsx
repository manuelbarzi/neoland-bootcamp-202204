export const ChordButton = ({ className, children, ...props }) => {
    return (
        <button {...props}
            className={`text-tertiary font-semibold ${className}`}>
            {children}
        </button>
    )
}