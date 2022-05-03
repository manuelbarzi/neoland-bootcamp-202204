function HelloWorld(){
    Component.call(this, `<div classe = "HelloWorld">
        <h1>Hello, World!</h1>
        </div>`)
}

chainPrototypes(Component, HelloWorld)