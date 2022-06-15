import './SuccessButton.sass'

export const SuccessButton = ({className, children, ...props}) => {
    return <button {...props} className={`Success-button ${className}`}>
        {children}
    </button>
}