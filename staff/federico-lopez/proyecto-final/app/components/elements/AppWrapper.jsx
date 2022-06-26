import { useState } from 'react'
import { Context, Feedback } from '../../components'

export function AppWrapper({ children }) {
    const [feedback, setFeedback] = useState(null)

    const handleFeedback = (level, title, description) => {
        debugger
        setFeedback({ level, title, description })
    }

    const handleFeedbackTimeOut = () => setFeedback(null)

    const onCloseClick = () => setFeedback(null)

    return (
        <Context.Provider value={{ handleFeedback }}>
            {children}
            {feedback !== null && <Feedback level={feedback.level} title={feedback.title} description={feedback.description} onTimeout={handleFeedbackTimeOut} onCloseClick={onCloseClick} />}
        </Context.Provider>
    )
}