function ChangeName() {
    Component.call(this, `<div class="ChangeName">
        <form class="Container">
            <input class="namebutton" type="text" name="name" placeholder="name">
            <button class="savename">Save</button>
        </form>
    </div>`)
}

chainPrototypes(Component, ChangeName)