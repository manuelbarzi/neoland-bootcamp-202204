import { useContext } from 'react'
import Context from './Context'
import removeProductfromSchedule from '../logic/removeProductfromSchedule'
import addProductToSchedule from '../logic/addProductToSchedule'
import './ProductsList.sass'


function Product({day, product, onChangeQuantity}) {
    

    const { handleFeedback } = useContext(Context)


    const handleAdd = async () => {
        try{ await addProductToSchedule(sessionStorage.token, day, product._id)          
            handleFeedback({ level: 'success', message: 'Cantidad añadida' })
            onChangeQuantity()

        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    const handleRemove = async () => {
        try{ await removeProductfromSchedule(sessionStorage.token, day, product._id)          
            handleFeedback({ level: 'success', message: 'Cantidad eliminada' })
            onChangeQuantity()

        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }


    

    return <div >
            <h4 className='text'>{product.title}</h4>
            <div className='Products'>
                <div className='Quantity'>
                    <button className="ButtonPan" onClick={handleRemove}>-</button>
                </div>
                    <img className="imggg" src={product.imagen} />
                <div className='Quantity'>
                    <button className="ButtonPan" onClick={handleAdd}>+</button>
                </div>
            </div>

    </div>
}

export default Product