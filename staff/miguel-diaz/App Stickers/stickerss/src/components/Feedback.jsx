import './Feedback.sass'

function Feedback({ level, message, onTimeout }) {
    setTimeout(onTimeout, 2200)

    return <div className={`Feedback Feedback--${level}`}>
        <p>{message}</p>
    </div>
}

export default Feedback