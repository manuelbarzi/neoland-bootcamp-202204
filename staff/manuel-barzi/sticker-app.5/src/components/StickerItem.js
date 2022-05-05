function StickerItem(sticker) {
    Component.call(this, '<li></li>')

    this.add(sticker)
}

chainPrototypes(Component, StickerItem)