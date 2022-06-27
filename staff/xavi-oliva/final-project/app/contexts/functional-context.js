import { createContext, useContext, useEffect, useState } from "react"
import { Feedback } from "../components"


const Context = createContext()

const Provider = ({children}) => {

    const [feedback, setFeedback] = useState({level: null, message: null})

    const [view, setView] = useState(false)

    const closeFeedback = () => {
        setView(false)
    }

    useEffect(() => {
        if (view) setTimeout(closeFeedback, 3000)
    }, [view])

    useEffect(() => {
        setView(true)
    }, [feedback])

    return <Context.Provider value={{feedback, setFeedback}}>
        {children}
        { view && 
        <Feedback>
            <p>{feedback.message}</p>
        </Feedback>
        }
    </Context.Provider>
}

const useFeedback = () => {
    const { setFeedback } = useContext(Context)

    return {
        setFeedback
    }

}

export const FunctionalContext = {
    Provider,
    useFeedback
}