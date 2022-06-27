import { useState } from 'react'
import { Context, Feedback, Dialog } from '../../components'

export function AppWrapper({ children }) {
    const [feedback, setFeedback] = useState(null)
    const [dialog, setDialog] = useState(null)

    const handleFeedback = (level, title, description) => {
        debugger
        setFeedback({ level, title, description })
    }

    const handleDialog = ({ level, title, description, button1, button2 }) => {
        setDialog({ level, title, description, button1, button2 })
    }

    const onCloseDialogClick = () => setDialog(null)

    const handleFeedbackTimeOut = () => setFeedback(null)

    const onCloseClick = () => setFeedback(null)

    return (
        <Context.Provider value={{ handleFeedback, handleDialog }}>
            {children}
            {feedback !== null && <Feedback level={feedback.level} title={feedback.title} description={feedback.description} onTimeout={handleFeedbackTimeOut} onCloseClick={onCloseClick} />}

            {dialog !== null && <Dialog level={dialog.level} title={dialog.title} description={dialog.description} button1={dialog.button1} button2={dialog.button2} onButton1Click={dialog.onButton1Click} onCloseClick={onCloseDialogClick} />}
        </Context.Provider>
    )
}