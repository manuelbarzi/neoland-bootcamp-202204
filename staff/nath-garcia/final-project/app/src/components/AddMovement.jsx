import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import retrieveMovements from "../logic/retrieveMovements"
import Context from './Context'

function AddMovement(props) {

    const [view, setView] = useState('AddMovement')
    const navigate = useNavigate()
    const { handleFeedback } = useContext(Context)

    const handleBackClick = () => {
        props.onBackClick()
    }

    

    const handleFormSubmit = event => {
        event.preventDefault()
        const amount = event.target.amount.value
        const category = event.target.category.value
        const concept = event.target.concept.value
        const account = event.target.account.value
        const date = event.target.date.value;
        (async () => {
            try {
                await retrieveMovements(amount, category, concept, account, date)
                navigate('/')
            } catch (error) {
                handleFeedback({ level: 'error', message: error.message })
            }
        })();
    }

    return <div>

        {view === 'AddMovement' && <div>
            <button className="Button Button--light" onClick={handleBackClick}>Back</button>
            <form className="Container" onSubmit={handleFormSubmit}>
            <label> <input className="Input Input--light" type="number" name="amount" placeholder="amount" /> €</label>
                <select className="Input Input--light" id="category" name="category">
                    <option>Home</option>
                    <option>Feeding</option>
                    <option>Beaty</option>
                    <option>Education</option>
                    <option>Tansportation</option>
                    <option>Leisure</option>
                    <option>Health</option>
                    <option>Routines</option>
                    <option>Other expenses</option>
                    <option>Salary</option>
                    <option>Saving</option>
                    <option>Interests</option>
                    <option>Gift</option>
                    <option>Return</option>
                    <option>Other income</option>
                </select>
                <textarea className="Input Input--light" placeholder="Concept ..."> </textarea>
                <select className="Input Input--light">
                    <option>Bank account</option>
                    <option>Credit card</option>
                    <option>Debit card</option>
                    <option>Paypal</option>
                    <option>Cash</option>
                    <option>Other</option>
                </select>
                <input className="Input Input--light" type="date" name="email" placeholder="email" />
                
                <button className="Button Button--light">Save</button>
                
            </form>

        </div>}
    </div>
}

export default AddMovement