import { useContext } from 'react'
import Context from './Context'
import removeProductfromSchedule from '../logic/removeProductfromSchedule'
import addProductToSchedule from '../logic/addProductToSchedule'



function Product({day, product}) {
    

    const { handleFeedback } = useContext(Context)


    const handleAdd = async () => {
        try{ await addProductToSchedule(sessionStorage.token, day, product._id)          
            handleFeedback({ level: 'success', message: 'Cantidad añadida' })
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    const handleRemove = async () => {
        try{ await removeProductfromSchedule(sessionStorage.token, day, product._id)          
            handleFeedback({ level: 'success', message: 'Cantidad eliminada' })
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }


    

    return <div className="Product">
        <h4>{product.title}</h4>
            
        <button className="Button" onClick={handleAdd}>Añadir cantidad</button>
        <button className="Button" onClick={handleRemove}>Eliminar cantidad</button>

    </div>
}

export default Product