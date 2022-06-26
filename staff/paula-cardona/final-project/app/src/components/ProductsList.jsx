import { useState, useEffect, useContext} from 'react'
import Context from './Context'
import retrieveProductsOfType from '../logic/retrieveProductsOfType'
import Product from './Product'
import './ProductsList.sass'
import Day from './Day'

function ProductsList ({day, typeClicked, onCrossClicked}) {

    
    const [products, setProducts] = useState(null)
    const { handleFeedback } = useContext(Context)
    const [view, setView] = useState('productslist')
    

    useEffect(() => {
        loadType()   
    }, [])

    const loadType = async() => {
        try {
            const products= await retrieveProductsOfType(sessionStorage.token, typeClicked) 
            
            setProducts(products)
                
            
        }catch(error) {
            handleFeedback({ level: 'error', message: error.message})
        }
    } 


        

    const handleCrossClick  = () => { 
        onCrossClicked()
    }
   



    return products && <div className='products'>
            
            {view === 'productslist' && <div >
            <button className='Cross' onClick={handleCrossClick}> ✗ </button> 
            {/* <h1 className= "ProductsType">{typeClicked}</h1>  */}

            <ul className='jelou'>
                {products.map(product => <div > 
                    <li key={product.id}>
                        <Product product={product} day={day} />
                    </li>
                </div>)}
            </ul>
            </div>}

            {view === 'day' && <Day />}

        </div> 
}

export default ProductsList