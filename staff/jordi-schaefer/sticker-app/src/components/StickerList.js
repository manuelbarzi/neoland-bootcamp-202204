class StickerList extends Component {
    constructor () {
        super (`<ul class="notelist"></ul>`)

    retrieveNotes(sessionStorage.username, (error, data) => {
        if (error) {
            alert(error.message)
            return
        }

        data.forEach(result => { 
            const sticker = new Sticker()  // creo un nuevo sticker

            sticker.setText(result.text)  // le añado el texto a la caasilla
            sticker.setId(result.id)    // le añado el id de la nota al objeto sticker

            const item = new StickerItem(sticker)

            sticker.onClose(() => {   // le doy funcion en caso de cierre
                this.remove(item)  // que me lo quite
            })

            this.add(item)   // se lo pongo al list
        })
    })
    } 



addSticker(sticker) {
    const item = new StickerItem(sticker)

    this.add(item)
}



// buscar todoslos li del listados y ver cual tiene como hijo ese sticker
removeSticker(sticker) {
    const items = this.container.children // selecciono todos los items

    for (let i = 0; i < items.length; i++){
        const item = items[i] // me traigo cada item

        if (item.hasChild(sticker.container)) {
            this.container.removeChild(item)
            return
        }
    }
}

}