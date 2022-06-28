export const Feedback = ({ className, level, children, ...props }) => {

    return <>
        <div {...props}
            // className={`fixed mx-auto left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-4 opacity-90 rounded-lg ${level} ${className}`}>

            className={'feedback ' + (level === 'success' ? 'feedback-success' : level === 'error' ? 'feedback-error' : 'feedback-default') }>

            {children}
        </div>
    </>
}