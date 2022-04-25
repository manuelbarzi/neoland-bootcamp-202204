const root = document.querySelector('#root')

const helloworld = new HelloWorld
const helloworld2 = new HelloWorld

const login = new Login
const login2 = new Login

root.append(helloworld.container, login.container, helloworld2.container, login2.container)