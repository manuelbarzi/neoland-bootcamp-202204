function Feedback({level, message, onTimeout}) {
    setTimeout(onTimeout, 1000)

    return <div className={`Feedback FeedBack--${level}`}>
        <p>{message}</p>
    </div>
}