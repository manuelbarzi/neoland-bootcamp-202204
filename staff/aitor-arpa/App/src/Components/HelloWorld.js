// con esta funcion creamos el objeto HelloWorld llamando a component para que añada nuestro contenido a su contenido

function HelloWorld () {
    Component.call(this, `<div class ="HelloWorld">
    <h1> Hello,World! </h1>
    </div>`)
}
//CAmbiamos el prototipo dicendole que el padre de helloWorld es Components
chainPrototypes(Component, HelloWorld)