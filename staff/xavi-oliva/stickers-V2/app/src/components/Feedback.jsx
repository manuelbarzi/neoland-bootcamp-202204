import React from 'react'

function Feedback({ level, message, onTimeout }) {
    setTimeout(onTimeout, 2000)

    return <div className={`Feedback Feedback--${level}`}>
        <p>{message}</p>
    </div>
}

export default Feedback