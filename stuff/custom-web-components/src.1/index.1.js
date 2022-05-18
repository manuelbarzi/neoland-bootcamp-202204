const root = document.querySelector('#root')

const helloworld = document.createElement('div')
helloworld.classList.add('helloworld')

const title = document.createElement('h1')
title.innerText = 'Hello, World!'

helloworld.append(title)

const login = document.createElement('div')
login.classList.add('login')

const form = document.createElement('form')
form.classList.add('login__form')

const usernameInput = document.createElement('input')
usernameInput.type = 'text'
usernameInput.name = 'username'
usernameInput.placeholder = 'username'

const passwordInput = document.createElement('input')
passwordInput.type = 'password'
passwordInput.name = 'password'
passwordInput.placeholder = 'password'

const submitButton = document.createElement('button')
submitButton.innerText = 'Login'

form.append(usernameInput, passwordInput, submitButton)
login.append(form)

root.append(helloworld, login)