import deleteUser from "../logic/deleteUser"
import {useContext} from "react" 
import Context from "./Context"




function DeleteUser(props) {
    const { handleFeedback } = useContext(Context)
  
   
    const handleDeleteClick = (event) => {
        event.preventDefault()

        const confirmation = event.target.elemento.value

        deleteUser(sessionStorage.token, confirmation, (error) => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })
                return
            }

            handleFeedback({ level: 'success', message: "User Deleted" })
            delete sessionStorage.token
            
            
            
            
        })
    }

    return <div className="DeleteUser">
        <form className="Container" onSubmit={handleDeleteClick}>
            <input className="form" type="password" name="elemento" placeholder=" Confirm your password" />
            <button className="Button" >Delete</button>
        </form>
    </div>
}
export default DeleteUser
