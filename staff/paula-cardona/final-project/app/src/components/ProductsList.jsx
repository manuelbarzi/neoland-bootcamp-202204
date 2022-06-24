import { useState, useEffect, useContext} from 'react'
import Context from './Context'
import retrieveProductsOfType from '../logic/retrieveProductsOfType'
import Product from './Product'
import './ProductsList.sass'

function ProductsList ({day, typeClicked}) {

    
    const [products, setProducts] = useState(null)
    const { handleFeedback } = useContext(Context)
    

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


    return products && <div >
            <button className='Cross'> ✗ </button> 
            {/* <h1 className= "ProductsType">{typeClicked}</h1>  */}

            <div >
            <ul className='jelou'>
                {products.map(product => <div > 
                    <li key={product.id}>
                        <Product product={product} day={day} />
                    </li>
                </div>)}
            </ul>
    
            </div>

        </div>
}

export default ProductsList