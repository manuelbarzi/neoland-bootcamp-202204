export const Textarea = ({ className, children, ...props }) => {

    return <>
        <textarea {...props}
            className={`${className}
            form-input`}>
            {children}
        </textarea>
    </>
}