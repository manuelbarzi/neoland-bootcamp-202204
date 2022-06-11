import { useState, useEffect, useContext } from 'react'
import Logger from 'loggy'
import Context from './Context'
import retrieveSpots from '../logic/retrieveSpots'
import Sticker from './Sticker'
import './StickerList.sass'

function StickerList({ timestamp }) {
    const logger = new Logger('StickerList')

    logger.info('call')

    const [spots, setSpots] = useState(null)
    const { handleFeedback } = useContext(Context)

    useEffect(() => {
        logger.info('componentDidMount | componentWillReceiveProps')

        loadSpots()
    }, [timestamp])

    const loadSpots = () =>
        retrieveSpots(sessionStorage.token, (error, spots) => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            setSpots(spots)
        })

    const handleRemoveSticker = stickerId => {
        const _spots = spots.filter(spot => spot.id !== stickerId)

        setSpots(_spots)
    }

    logger.info('render')

    return spots && spots.length ?
        <ul className="StickerList__list Container">
            {spots.map(spot => <li key={spot.id}>
                <Sticker stickerId={spot.id} text={spot.text} onRemove={handleRemoveSticker} />
            </li>)}
        </ul>
        :
        <p>no stickers yet</p>
}

export default StickerList