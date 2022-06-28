export const Input = ({ className, children, ...props }) => {

    return <>
        <input {...props}
            className={`${className}
            form-input`}>
            {children}
        </input>
    </>
}