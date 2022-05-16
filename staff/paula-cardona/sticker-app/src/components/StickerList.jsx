import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveNotes from '../logic/retrieveNotes'
import Sticker from './Sticker'
import FormatError from '../error/index'
import './StickerList.sass'


function StickerList ({timestamp}) { //por props le pasamos un timestamp
    const logger = new Logger('StickerList')

    logger.info('call')

    const [notes, setNotes] = useState(null) //creo una propiedad de estado en la que notas es null por defecto
    const { handleFeedback } = useContext(Context)
    

    // componentDidMount(){ //lo usamos para guardar información en la sessionstorage
    //     this.loadNotes()
    // }
    // componentWillReceiveProps(newProps) {  //componente que se usa cuando las propiedades cambian
    //     if (this.props.timestamp !== newProps.timestamp)
    //     this.loadNotes()
    // }

    useEffect(() => {//le paso un callback y un array vacío. si tengo array vaciio disparará la primera vez el compodidmount cada vez que se monta y ya, pero tambíen se tiene que cambiar cuando cambiamos las propiedades, cuando se cambia el timestamp (que es para tener actualizado completamente al momento todo el rato la stickerlist ya que si creo una nota no me sale en el momento que la he creado si no la actualizo a date.now)
        logger.info('componentDidMount | componentWillReciveProps ')
        
        loadNotes()
    }, [timestamp]) //si el timestramp cambia se va a disparar de nuevo el useeffect



    const loadNotes = () => 
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })
                return
            }

            setNotes( notes )
        })

    
    
    const handleRemoveSticker = stickerId => {  //cremos el método de handleRemoveSticker donde le pasamos el parametro de stickerId para encontrarlo(callback)
        const _notes = notes.filter(note => note.id !== stickerId) //guardamos en notes, todas las notas filtrandolas con filter y no cogiendo aquella note.id que sea igual al id del sticker que habiamos usado como parametro

        setNotes (_notes ) //cambio de estado
    }
    
    const handleStickerSaved = stickerId =>{
        handleStickerSaved(stickerId)
    }

    logger.info('render')

    return notes && notes.length ? //pinta si hay notas y si por lo tanto la stickerlist tiene length.
        <ul className="StickerList__list Container">
            {notes.map(note => <li key={note.id}> {/*en cada nota se le pone su id*/}
                <Sticker stickerId={note.id} text={note.text} onRemove={handleRemoveSticker} /> 
                </li>)}
        </ul>
        : //si no tiene notes ni largura que pinte no stickers yet
        <p>no stickers yet</p>
}

export default StickerList


/* EN EL RENDER VEMOS QUE STICKER LIST TIENE HIJOS. EL STICKER TIENE:
- UN IDENITIFICADOR DE NOTA, NOTE.ID
- TEXTO REFERENCIADO COMO NOTE.TEXT
-UN REMOVE REFERENCIADO COMO THIS.HANDLEREMOVESTICKER
-UN GUARDADO
*/

