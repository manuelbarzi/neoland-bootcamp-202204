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

    return products && <div classname="Container">
            <div>
                <h1 className= "h1__Pan">{typeClicked}</h1> 
            </div>
            
            <ul className="PanesList Container">
                {products.map(product => <li key={product.id}>
                    <Product product={product} day={day}/>
                    
                </li>)}
            </ul>

            <button className='Cross Container'> X </button> 
        </div>
}

export default ProductsList