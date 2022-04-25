const root = document.querySelector('#root') //Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
                                            //div con id root se pone con #
//quiero crean un documento con un div

const helloworld = new HelloWorld //mayuscula porque es new component

const login = new Login
const register = new Register

root.append(helloworld.container, register.container, login.container, ) //permite poner dentro cosas
//The Element.append() method inserts a set of Node objects or DOMString objects after the last child of the Element. DOMString objects are inserted as equivalent Text nodes.
//root.append(div)


//____________________________________________>


// Compos lib
/*
//función constructora que es para crear componentes que recibe como paramentros elementos, clases i contenido html para formar un contenedor.
function Component(elemType, className, htmlContent) {
    this.container = document.createElement(elemType)
    this.container.classList.add(className)

    this.container.innerHTML = htmlContent  //le enviamos el contenido literal
}

function chainPrototypes(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}


LO MISMO MAS BREVE___

1)  container=document.creatElement('div')

container= document.createContainer('<div class="register">
    <form class="register__form">
        <input type="text" name="name" placeohlder="name">
        <input type="text" name="name" placeohlder="name">
        <input type="password" name="password" placeoholder="password">
    </form>
</div>')


2)  LO CAMBIA PARA PASARLO TODO COMO HTML

temp=document.creatElement('div')
es un div que no me importa pero me interesa lo que tiene en su interior

temp.innerHTML = ('<div class="register">
    <form class="register__form">
        <input type="text" name="name" placeohlder="name">
        <input type="text" name="name" placeohlder="name">
        <input type="password" name="password" placeoholder="password">
    </form>
</div>')*/

/*
3)  le creo un contenedor para coger el contenido sin el div temp
container = temp.firstChild (con esto descarto el div i puedo construir todo el contenedor con html)

function Component (template){   //la llamo como función y le paso el elemento
    const temp= document.createElement('div')
    temp.innerHTML = template
    this.container = temp.firstChild
}


const register = new Component (`<div class="register">
    <form class="register__form">
        <input type="text" name="name" placeohlder="name">
        <input type="text" name="name" placeohlder="name">
        <input type="password" name="password" placeoholder="password">
    </form>
</div>´)
si pones register.container queda todo dentro del register
*/







/*

_____________________________________________>

// My custom components

function HelloWorld() {
    Component.call(this, 'div', 'helloworld', '<h1>Hello, World!</h1>')
}
/*igual a*/
function HelloWorld(){
    Component.call(this, <div class="helloworld">
        <h1>Hello, World!</h1>)
    </div>
}
chainPrototypes(Component, HelloWorld)



//login se encadena como prototipo padre. EJEMPLO DE HTML CONTENT

function Login() {
    Component.call(this, 'div', 'login'> 
    <form class="login__form">
        <input type="text" name="username" placeholder="username">
        <input type="password" name="password" placeholder="password">
        <button>Login</button>
    </form>
</div>)

}
chainPrototypes(Component, Login)
