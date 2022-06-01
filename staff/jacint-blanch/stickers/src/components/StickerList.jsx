function StickerList(props){

    logger = new Logger('StickerList')

    logger.info('call')

    logger.info('constructor')



    const componentDidMount = () => {
        logger.info('componentDidMount')

        loadNotes()
    }

    const loadNotes = () => {

        retrieveNotes(sessionStorage.token, (error, notes) => {
            
            if (error) {
                alert(error.message)

                return
            }

            setState({ notes })
        })
    }

    const componentWillReceiveProps = (newProps) => {
        logger.info('componentWillReceiveProps')

        if (props.timestamp !== newProps.timestamp)
            loadNotes()
    }

    const handleRemoveSticker = stickerId => {
        const notes = state.notes.filter(note => note.id !== stickerId)

        setState({ notes })

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