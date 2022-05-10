function ChangeName(){
    Component.call(this, `<div class="ChangeName">
    <form class="Container">
    <input type = "text" name = "name" placeholder="name">
    <button>Save</button>
    </form>
    </div>`)
}

chainPrototypes(Component, ChangeName)