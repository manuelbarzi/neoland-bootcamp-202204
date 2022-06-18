export const Fieldset = ({ className, children, ...props }) => {

    return (
        <fieldset {...props}
            className={`w-4/5 flex flex-col content-between items-start gap-3 ${className}`}>
            {children}
        </fieldset>
    )
}