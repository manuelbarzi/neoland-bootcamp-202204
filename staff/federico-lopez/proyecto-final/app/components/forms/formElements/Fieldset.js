export const Fieldset = ({ className, children, ...props }) => {

    return (
        <fieldset {...props}
            className={`w-full flex content-between items-start gap-1 ${className}`}>
            {children}
        </fieldset>
    )
}