/* 001
const root = document.querySelector('#root')

const register = new Register

root.append(register.container)
*/
// 001^son los primeros pasos. Luego el root.append quedará abajo al final ya que entre medio construiremos la libreria de Funciones constructoras

const root = document.querySelector('#root')

const register = new Register
//^ aquí creo una constante con un nuevo Register, la función que esta en Register.js

register.onSubmit(function(name, username, password){
    const user = { 
                name: name, 
                username: username, 
                password: password 
            }
        users.push(user) 
        // añadimos un objeto con tres valores en el array
        // root.removeChild(register.container) //esta claro, quitamos register. ¿porque container? pues porque en la linea 8 de smart-components.js le dijimos que "container", con "this.container"
        // root.appendChild(login.container)

        root.removeChild(register.container)
        root.appendChild(login.container)    
})



root.append(register.container)
