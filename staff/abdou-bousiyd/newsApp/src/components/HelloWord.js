function HelloWorld () {
    Component.call(this, `<div class='HelloWorld'>
        <h1> Hellow World</h1>
    </div>`)
}
chainPrototypes(Component, HelloWorld)