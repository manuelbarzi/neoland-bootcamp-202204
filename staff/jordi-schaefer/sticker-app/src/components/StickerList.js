function StickerList() {
    Component.call(this, `<ul class="notelist"></ul>`)

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
                this.remove(sticker)  // que me lo quite
            })

            this.add(item)   // se lo pongo al list
        })
    })
} 


chainPrototypes(Component, StickerList)

StickerList.prototype.addSticker = function(sticker) {
    const item = new StickerItem(sticker)

    this.add(item)
}