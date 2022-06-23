export const BlueAnchor = ({ className, children, ...props }) => {

    return (
        <a {...props}
            className={`text-sm text-myblue font-bold ${className}`}>
            {children}
        </a>
    )
}