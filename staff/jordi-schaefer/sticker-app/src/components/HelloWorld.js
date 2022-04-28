function HelloWorld() {
    Component.call(this, `<div class="HelloWorld">
        <h1>Hello, Notes!</h1>
    </div>`)
}

chainPrototypes(Component, HelloWorld)