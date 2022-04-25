function HelloWorld() {// constructor function HelloWorld with attributes
    Component.call(this, `<div class="HelloWold">
    <h1>Hello, World!</h1>
    </div>`)
}
chainPrototypes(Component, HelloWorld)