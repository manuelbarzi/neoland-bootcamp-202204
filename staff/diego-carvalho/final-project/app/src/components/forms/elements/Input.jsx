import './Input.sass'

export const Input = ({className, ...props}) => {
    return <input {...props} className={`Input ${className}`}/>
}