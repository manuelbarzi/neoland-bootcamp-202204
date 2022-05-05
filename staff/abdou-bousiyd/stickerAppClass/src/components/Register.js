class Register extends Component {
  constructor() {
    super(`<div>
                <p></p>
                <form class="form__register Container">

                    <h1 class="form__register__title">Register To StickerApp</h1>

                    <fieldset>

                        <label id="name" for="name">Name</label>
                        <input class="form__register__input" type="text" name="name" placeholder="name">
                        
                        <label id="username" for="username">Username or Email</label>
                        <input class="form__register__input" type="text" name="username" placeholder="username">
                        
                        <label id="password" for="password">Password</label>
                        <input class="form__register__input" type="password" name="password" placeholder="password">
                    <fieldset>

                    <button class="form__register__btn">Register</button>
                    <a href="#">Login</a>
            </form>
        </div>`);
  }

  onUserRegister(callbalck) {
    const form = this.container.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value;
      const username = form.username.value;
      const password = form.password.value;

      // callbalck(name, username, password)

      registerUser(name, username, password, function (error) {
        if (error) {
          alert(error.message);
          return;
        }
        callbalck();
      });
    });
  }

  onLoginClick(callback) {
    const anchor = this.container.querySelector("a");

    anchor.addEventListener("click", function (event) {
      event.preventDefault();

      callback();
    });
  }
}
