export const Feedback = ({ className, level, children, ...props }) => {

    return <>
        <div {...props}
            className={'feedback ' + (level === 'success' ? 'feedback-success' : level === 'error' ? 'feedback-error' : 'feedback-default') }>

            {children}
        </div>
    </>
}