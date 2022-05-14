const  { useContext } = React
// TODO implementar logica y combertir a Funcion 
function ChangePassword () {
    const { handleFeedeback } = useContext(Context)
  const handleSubmit = event => {
      event.prevntDefault()

      const password = event.target.password.value
      const newPassword = event.target.newPassword.value
      const newPasswordRepeat = event.target.newPasswordRepeat.value

      try {
          updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error =>{
              if (error) {
                  handleFeedeback(error.message)

                  return
              }
              handleFeedeback('Password saved')
          })
      } catch (error){
          handleFeedeback(error.message)
      }
    }
      
        return <div className="ChangePassword"  >
        <form className="Container" onSubmit={handleSubmit}>
            <input type="newPasswordRepeat" name="password" placeholder="current password" />
            <input type="password" name="newPassword" placeholder="new password" />
             <input type="password" name="newPasswordRepeat" placeholder="repeat new password"/>
                        <button >Save</button>
                    </form>
                </div>
        
}    

              
          
        

  


