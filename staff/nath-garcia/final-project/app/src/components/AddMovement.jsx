import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import saveMovement from "../logic/saveMovement"
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
        const type = event.target.type.value
        const category = event.target.category.value
        const concept = event.target.concept.value
        const account = event.target.account.value
        const date = event.target.date.value;
        try {
            saveMovement(sessionStorage.token, Number(amount), type, Number(category), concept, account, date, (error) => {
                if (error) return handleFeedback({ level: 'error', message: error.message })
                navigate('/')
            })
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
       
    }

    return <div>

        {view === 'AddMovement' && <div>
            <button className="Button Button--light" onClick={handleBackClick}>Back</button>
            <form className="Container" onSubmit={handleFormSubmit}>
           
            <select className="Input Input--light" id="type" name="type">
                <option value="outcome">Outcome</option>
                <option value="income">Income</option>
            </select>
                <select className="Input Input--light" id="category" name="category">
                    <option value="0">Home</option>
                    <option value="1">Feeding</option>
                    <option value="2">Beaty</option>
                    <option value="3">Education</option>
                    <option value="4">Tansportation</option>
                    <option value="5">Leisure</option>
                    <option value="6">Health</option>
                    <option value="7">Routines</option>
                    <option value="8">Other expenses</option>
                    <option value="9">Salary</option>
                    <option value="10">Saving</option>
                    <option value="11">Interests</option>
                    <option value="12">Gift</option>
                    <option value="13">Return</option>
                    <option value="14">Other income</option>
                </select>
                <textarea name="concept" className="Input Input--light" placeholder="Concept ..."> </textarea>
                <label> <input className="Input Input--light" type="number" name="amount" placeholder="amount" /> €</label>
                <select name="account" className="Input Input--light">
                    <option>BankAccount</option>
                    <option>Creditard</option>
                    <option>Debitard</option>
                    <option>Paypal</option>
                    <option>Cash</option>
                    <option>Other</option>
                </select>
                <input className="Input Input--light" type="date" name="date" placeholder="email" />
                
                <button type="submit" className="Button Button--light">Save</button>
                
            </form>

        </div>}
    </div>
}

export default AddMovement