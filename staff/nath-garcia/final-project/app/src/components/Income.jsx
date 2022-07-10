import { useState, useEffect, useContext } from "react"
import Context from '../components/Context'
import retrieveMovements from "../logic/retrieveMovements"
import { useNavigate } from "react-router-dom"
import { isJwtValid } from "../validators"

function Income(props) {

    const [view, setView] = useState('Income')
    const navigate = useNavigate()
    const [movements, setMovements] = useState(null)
    const { handleFeedback } = useContext(Context)


    useEffect(() => {
        getMovements()
    }, [])

    const getMovements = async () => {
        try {
            const result = await retrieveMovements(sessionStorage.token)
            setMovements(result)
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    return isJwtValid(sessionStorage.token) ?
    <ul>
       {movements && movements.map( movement => { 
        if(movement.category>8) {
        return <li>
            <h2>Category: {movement.category}</h2>
            <h2>Amount: {movement.amount}</h2>
            <h2>Date: {movement.date.toLocaleDateString()}</h2>
        </li>}})}
    </ul> : <></>
}

export default Income