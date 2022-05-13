const { useState, useEffect } = React

function StickerList({ timestamp }) {
    const logger = new Logger('StickerList')

    logger.info('call')

    // const noteState = useState(null)
    // const notes = notesState[0]
    // const setNotes = notesState[1]
    const [notes, setNotes] = useState(null)

    // componentDidMount() {
    //     logger.info('componentDidMount')

    //     loadNotes()
    // }

    // useEffect(() => {
    //     logger.info('componentDidMount')

    //     loadNotes()
    // }, [])

    // componentWillReceiveProps(newProps) {
    //     logger.info('')

    //     if (props.timestamp !== newProps.timestamp)
    //         loadNotes()
    // }

    // useEffect(() => {
    //     logger.info('componentWillReceiveProps')

    //     loadNotes()
    // }, [timestamp])

    useEffect(() => {
        logger.info('componentDidMount | componentWillReceiveProps')

        loadNotes()
    }, [timestamp])

    const loadNotes = () =>
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            setNotes(notes)
        })

    const handleRemoveSticker = stickerId => {
        const _notes = notes.filter(note => note.id !== stickerId)

        setNotes(_notes)
    }

    logger.info('render')

    return notes && notes.length ?
        <ul className="StickerList__list Container">
            {notes.map(note => <li key={note.id}>
                <Sticker stickerId={note.id} text={note.text} onRemove={handleRemoveSticker} />
            </li>)}
        </ul>
        :
        <p>no stickers yet</p>
}