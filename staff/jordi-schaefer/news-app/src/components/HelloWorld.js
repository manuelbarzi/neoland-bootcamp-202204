
/* 
En cuando cargo el html, se llama a script principal index
Y alli crea variables donde amlacena el resultado de esta funcion (crear el objeto)
le envia el codigo html para creacion del componente, en smarts-components
guarda todo el paquete html en una propiedad llamada container
*/

function HelloWorld() {
    Component.call(this, `<div class="HelloWorld">
        <h1>Hello, World!</h1>
    </div>`)
}

/*
Seguidamente llamo a la funcion dentro de utils
donde une HelloWord como hijo del Component
*/

chainPrototypes(Component, HelloWorld)


