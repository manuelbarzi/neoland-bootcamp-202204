const  { useContext } = React
// TODO implementar logica y combertir a Funcion 
function ChangePassword () {
const { handeleFeedback } = useContext(Context)

  const handleSubmit = event => {
    event.preventDefault()
      

      const password = event.target.password.value
      const newPassword = event.target.newPassword.value
      const newPasswordRepeat = event.target.newPasswordRepeat.value

      try {
          updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error =>{
              if (error) {
                handleFeedback({ level: 'error', message: error.message })
                  return
              }
              handleFeedback({ level: 'success', message: 'Password saved' })
          })
      } catch (error){
        handleFeedback({ level: 'error', message: error.message })
      }
    }
      
        return <div className="ChangePassword" >
        <form className="Container" onSubmit={handleSubmit} >
            <input type="newPasswordRepeat" name="password" placeholder="current password" />
            <input type="password" name="newPassword" placeholder="new password" />
             <input type="password" name="newPasswordRepeat" placeholder="repeat new password"/>
                        <button >Save</button>
                    </form>
                </div>
        
}    

              
          
        

  


