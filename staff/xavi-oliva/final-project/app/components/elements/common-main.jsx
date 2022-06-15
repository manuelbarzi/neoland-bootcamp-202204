export const CommonMain = ({ className, children, ...props }) => {

    return <>
        <main {...props}
            className={`${className}
            flex-1 overflow-y-auto`}>
            {children}
        </main>
    </>
}