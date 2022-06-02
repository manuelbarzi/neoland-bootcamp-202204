
// TODO implementar logica y combertir a Funcion 
function ChangePassword () {
  const handleSubmit = event => {
      event.prevntDefault()

      const password = event.target.password.value
      const newPassword = event.target.newPassword.value
      const newPasswordRepeat = event.target.newPasswordRepeat.value

      try {
          updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error =>{
              if (error) {
                  alert(error.message)

                  return
              }
              alert('Passeord saver')
          })
      } catch (error){
          alert(error.message)
      }
    }
  

    
        return <div className="ChangePassword"  >
        <form className="Container" >
            <input type="newPasswordRepeat" name="password" placeholder="current password" />
            <input type="password" name="newPassword" placeholder="new password" />
             <input type="password" name="newPasswordRepeat" placeholder="repeat new password"/>
                        <button onSubmit={handleSubmit}>Save</button>
                    </form>
                </div>
        
}    

              
          
        

  


