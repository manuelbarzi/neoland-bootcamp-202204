export const Wrapper = ({ className, children, ...props }) => {

    return <>
        <div {...props}
            className={`${className} 
                w-screen bg-gradient-primary`
            }>
            {children}
        </div>
    </>
}