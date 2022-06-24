export const FlexColSection = ({ className, children, ...props }) => {
    return (
        <section {...props}
            className={`w-full min-h-screen h-full overflow-scroll flex flex-col ${className}`}>
            {children}
        </section>
    )
}