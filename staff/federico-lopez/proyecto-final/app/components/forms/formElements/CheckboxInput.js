export const CheckboxInput = ({ className, children, ...props }) => {

    return (
        <input type="checkbox" checked {...props}
            className={`${className}`}>
            {children}
        </input>
    )
}