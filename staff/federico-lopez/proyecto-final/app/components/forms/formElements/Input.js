export const Input = ({ className, children, ...props }) => {

    return (
        <input {...props}
            className={`h-9 w-full p-2 rounded-md border border-gray-600 ${className}`}>
            {children}
        </input>
    )
}