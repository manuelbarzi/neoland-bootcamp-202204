function Register(){//constructor function Register with attributes.
    Component.call(this, `<div class="Register">
        <form class="Register__form">
            <input type="text" name="name" placeholder="name">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Register</button>
            <a href="#">Login</a>
        </form>
    <div>` )
}

chainPrototypes(Component, Register)//calling the chainprototype with parent(Component) and child(Register)

Register.prototype.onSubmit = function (callback){
    const form = this.container.querySelector('form')
    
    form.addEventListener('submit', function(event){//The method addEventListener() works by adding a function, to the list of event listeners
        event.preventDefault()

        //geting value of the inputs attributs
        const name = form.name.value 
        const username = form.username.value
        const password= form.password.value

        callback(name, username, password)//callback the values that will be save on data file.
    })
}

Register.prototype.onLoginClick = function(callback) {
    const anchor = this.container.querySelector('a')

    anchor.addEventListener('click', function(event){//function callback that add the eventListener to the click funtion on the anchor (<a>)
        event.preventDefault()

        callback()
    })
}