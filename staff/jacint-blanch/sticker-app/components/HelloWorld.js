function HelloWorld() {
    Component.call(this, `<div class="HelloWorld">
        <h1>Inicio!</h1>
    </div>`)
}

chainPrototypes(Component, HelloWorld)