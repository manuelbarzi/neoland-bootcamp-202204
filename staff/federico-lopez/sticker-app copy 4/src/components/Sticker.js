function Sticker(previousText = '') {
    Component.call(this, `<li class="Sticker">
        <a class="xButton">x</a>
        <form class="Sticker__form">
            <textarea class="textarea" name="text"></textarea>
            <button class="saveButton">Save</button>
        </form>
    </li>`)

    const textarea = this.container.querySelector('textarea')

    textarea.innerText = previousText

}

chainPrototypes(Component, Sticker)

Sticker.prototype.onSubmit = function (callback) {
    const form = this.container.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const text = form.text.value

        callback(text)
    })
}

Sticker.prototype.onClose = function (callback, parent) {
    const close = this.container.querySelector('.xButton')

    close.addEventListener('click', function () {
        callback()
    })
}