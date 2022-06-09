import './Feedback.sass'

function Feedback(props) {
    const { level, message, onTimeout } = props

    setTimeout(onTimeout, 1000)

    return <div className={`Feedback Feedback--${level}`} >
        <p>{message}</p>
    </div>
}

export default Feedback