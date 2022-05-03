function NoteLi(text) {
    Component.call(this, `<li class="note"><h2></h2></li>`)

    const h = this.container.querySelector('h2')
    h.innerText = text
}

chainPrototypes(Component, NoteLi)