function Feedback(props) {
    return <div className={`Feedback Feedback__${props.level}`} >
        <p>{props.message}</p>
    </div>
}