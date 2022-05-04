function StickerList() {
    Component.call(this, `<ul class="StickerList__list Container"></ul>`)

    if (sessionStorage.username)
        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            const items = notes.map(note => {
                const sticker = new Sticker
                sticker.setText(note.text)
                sticker.setId(note.id)

                const item = new StickerItem(sticker)

                sticker.onClose(() => this.remove(item))

                return item
            })

            this.add(...items)
        })
}

chainPrototypes(Component, StickerList)

StickerList.prototype.addSticker = function(sticker) {
    const item = new StickerItem(sticker)

    this.add(item)

    //tenemos que
}

// Wed 4 May 0940 
// voy a mirar 
StickerList.prototype.removeSticker = function(sticker){
    const items = this.container.children
    for(let i = 0; i < items.length; i++){
        const item = items[i]

        if (item.hasChild(sticker.container)){
            this.container.removeChild(item)

            return
        }

    }
}