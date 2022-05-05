function HelloWorld() {// constructor function HelloWorld with attributes
    Component.call(this, `<div class="HelloWorld">
    <h1>Hello, World!</h1>
    </div>`)
}
chainPrototypes(Component, HelloWorld)//calling the chainprototype with parent(Component) and child(HelloWorld)