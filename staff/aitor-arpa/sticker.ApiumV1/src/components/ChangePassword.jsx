const { Component } = React

class ChangePassword extends Component {
  
    render() {
        return <div className="ChangePassword" >
        <form className="Container">
            <input type="password" name="password" placeholder="current password" />
            <input type="password" name="newPassword" placeholder="new password" />
             <input type="password" name="newPasswordRepeat" placeholder="repeat new password"/>
                        <button>Save</button>
                    </form>
                </div>
        
    }
}
              
          
        

  


