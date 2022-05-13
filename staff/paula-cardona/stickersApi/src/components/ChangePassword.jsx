const { Component } = React

class ChangePassword extends Component{

    handleFormSubmit = event => {
        // esto es una responsabilidad (recoger valores)
        event.preventDefault ()

            const password = event.target.password.value //en el evento del target, en este caso del form, pon el valor del password i guardalo en password
            const newPassword = event.target.newPassword.value
            const newPasswordRepeat = event.target.newPasswordRepeat.value

        // esto es otra responsabilidad (Manejar la respuesta [try catch])
            try{
                updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error => {
                    if (error) {
                        // esto manjea el error asíncrono,
                        // como no tenemos otro recurso para manejarlo, lo manejamos por la callback
                        alert(error.message)

                        return
                    }

                    alert('Password saved')
                })
            } catch(error){
                alert(error.message)
            }

    }


    render (){
        return <div className="ChangePassword">
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input className="Input" type="password" name="password" placeholder="current password"/>

                <input className="Input" type="password" name="newPassword" placeholder="new password"/>
                <input className="Input" type="password" name="newPasswordRepeat" placeholder="repeat new password"/>

                <button>Save</button>
            </form>
        </div>
    
    }
}

