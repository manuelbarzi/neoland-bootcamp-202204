function Sticker() {
    Component.call(this, `<div class="Sticker">
        <button>x</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button>Save</button>
        </form>
    </div>`)

    const form = this.container.querySelector('form')//thiscontainer requer form using the querySelector

    form.addEventListener('submit', event => {
        event.preventDefault()

        const text = form.text.value//the area where the user will write

        createNote(sessionStorage.username, text, error => {//error alert in case ...??
            if(error) {
                alert(error.message)

                return
            }

            alert('Sticker saved!')//alert when the sticker has been saved
        })
    })
}

chainPrototypes(Component, Sticker)

Sticker.prototype.onClose = function(callback) {
    const close = this.container.querySelector('button')

    close.addEventListener('click', function(){
        callback()
    })
}

