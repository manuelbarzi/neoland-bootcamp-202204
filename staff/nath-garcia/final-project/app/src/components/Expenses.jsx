import { useState, useEffect, useContext } from "react"
import Context from '../components/Context'
import retrieveMovements from "../logic/retrieveMovements"
import { useNavigate } from "react-router-dom"
import { isJwtValid } from "../validators"

function Expenses(props) {

    const [view, setView] = useState('Expenses')
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
        if(movement.category<=9) {
        return <li>
            <h3>Category: {movement.category}</h3>
            <h3>Amount: {movement.amount}</h3>
            <h3>Date: {movement.date.toLocaleDateString()}</h3>
        </li>}})}
    </ul> : <></>
}

export default Expenses