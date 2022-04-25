const root = document.querySelector('#root')

const helloworld = document.createElement('div')
helloworld.classList.add('helloworld')

helloworld.innerHTML = '<h1>Hello, World!</h1>'

const login = document.createElement('div')
login.classList.add('login')

login.innerHTML = '<form class="login__form"><input type="text" name="username" placeholder="username"><input type="password" name="password" placeholder="password"><button>Login</button></form>'

root.append(helloworld, login)