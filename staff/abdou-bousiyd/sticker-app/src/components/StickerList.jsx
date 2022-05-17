const { Component, useState, useEffect } = React 

function StickerList(props) {

    const [alert, setAlert] = useState(null)
    const [notes, setNotes] = useState(null)


    useEffect(() => {
        loadNotes()
    }, []);

    const loadNotes = () => {
        retrieveNotes(sessionStorage.token, (error, _notes) => {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }
            setNotes( _notes )
        })
    }

    const handleRemoveSticker = stickerId => {
        const _notes = notes.filter(note => note.id !== stickerId)
        setNotes(_notes)
    }

    return notes && notes.length ?
        <ul className="StickerList__list _Container">
            
            {notes.map(note => <li key={note.id}>
                <Sticker stickerId={note.id} text={note.text} onRemove={handleRemoveSticker} />
                </li>)}
        </ul>
        :
        <div>
            <p>no stickers yet</p>
            {alert && alert}
        </div>
}
    
            
    //     if (sessionStorage.username)
    //         retrieveNotes(sessionStorage.username, (error, notes) => {
    //             if (error) {
    //                 alert(error.message)

    //                 return
    //             }

    //             const items = notes.map(note => {
    //                 const sticker = new Sticker
    //                 sticker.setText(note.text)
    //                 sticker.setId(note.id)

    //                 const item = new StickerItem(sticker)

    //                 sticker.onClose(() => this.remove(item))

    //                 return item
    //             })

    //             this.add(...items)
    //         })
    // }

    // addSticker(sticker) {
    //     const item = new StickerItem(sticker)

    //     this.add(item)
    // }

    // removeSticker(sticker) {
    //     const items = this.container.children

    //     for (let i = 0; i < items.length; i++) {
    //         const item = items[i]

    //         if (item.hasChild(sticker.container)) {
    //             this.container.removeChild(item)

    //             return
    //         }
    //     }
    // }